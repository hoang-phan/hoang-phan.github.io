class Transform
  def initialize(infile, outfile, transforms)
    @outfile = outfile
    @svg = File.read(infile)
    @transforms = transforms.map do |tr|
      parts = tr.split(',')
      [parts[0]] + parts[1..-1].map(&:to_f)
    end
  end

  def perform
    File.open(outfile, 'w') { |f| f << calc }
  end

  private

  def calc
    result = ''
    non_coords.each_with_index do |token, i|
      result << token

      if coords[i]
        x, y = coords[i].split(',').map(&:to_f)

        transforms.each do |tr|
          x, y = transform(x, y, tr)
        end

        result << "#{x.round(2)},#{y.round(2)}"
      end
    end

    result
  end

  def transform(x, y, tr)
    case tr[0]
    when 't'
      [x + tr[1], y + tr[2]]
    when 's'
      [x * tr[1], y * tr[2]]
    when 'r'
      a = tr[1] * Math::PI / 180
      sin_a, cos_a = Math.sin(a), Math.cos(a)
      [x * cos_a - y * sin_a, x * sin_a + y * cos_a]
    else
      []
    end
  end

  def coords
    @coords ||= svg.scan(/-?[\d\.\,]{3,}/)
  end

  def non_coords
    @non_coords ||= svg.split(/-?[\d\.\,]{3,}/)
  end

  attr_accessor :svg, :outfile, :transforms
end

Transform.new(ARGV.shift, ARGV.shift, ARGV).perform
