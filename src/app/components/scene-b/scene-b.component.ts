import { Component } from '@angular/core';

@Component({
  selector: 'scene-b',
  templateUrl: './scene-b.component.html',
  host: {'(window:scroll)': 'onScroll($event)'},
  styleUrls: ['./scene-b.component.css']
})
export class SceneBComponent {
  petals1 = [
    [330, 6400, 100, 0.2, -0.3, -2, 0.00005, 400],
    [0, 6500, 100, 0.15, -0.3, -1.5, 0.00005, 350],
    [30, 6600, 100, 0.1, -0.3, -1, 0.00005, 300],
    [60, 6700, 100, 0.05, -0.3, -0.5, 0.00005, 250],
    [90, 6800, 100, -0.05, -0.3, 0.5, 0.00005, 200],
    [120, 6900, 100, -0.05, -0.3, 1, 0.00005, 150],
    [150, 7000, 100, -0.101, -0.3, 1.5, 0.00005, 100],
    [180, 7100, 100, -0.102, -0.3, 2, 0.00005, 50],
  ]

  petals2 = [
    [285, 7200, 100, 0.01, -0.8, -0.4, 0.00005, 1000],
    [310, 7300, 100, 0, -0.7, -0.3, 0.00005, 900],
    [335, 7400, 100, -0.01, -0.6, -0.2, 0.00005, 800],
    [0, 7500, 100, -0.02, -0.5, -0.1, 0.00005, 700],
    [25, 7600, 100, -0.03, -0.4, 0, 0.00005, 600],
    [50, 7700, 100, -0.04, -0.3, 0.1, 0.00005, 500],
    [75, 7800, 100, -0.05, -0.2, 0.2, 0.00005, 400],
    [100, 7900, 100, -0.06, -0.1, 0.3, 0.00005, 300, 2250],
    [125, 8000, 100, -0.07, 0.0, 0.4, 0.00005, 200],
    [150, 8100, 100, -0.08, 0.1, 0.5, 0.00005, 100],
  ]

  scrollTop;

  dandelionParts = [
    [229.856, 1000, 400, "M 232.50,240.00 C 194.55,283.27 166.55,354.36 172.50,456.00"],
    [235.725, 1800, 400, "M 232.50,231.00 C 189.55,278.27 161.55,349.36 167.50,451.00"],
    [159.577, 1200, 400, "M 173.67,451.33 C 185.67,399.67 216.00,337.00 251.67,316.00"],
    [155.496, 2000, 400, "M 177.67,455.33 C 189.67,403.67 220.00,341.00 251.67,322.00"],
    [155.764, 2600, 400, "M 237.31,221.69 C 232.24,221.02 222.88,224.94 219.30,226.78 216.47,228.41 212.08,229.45 205.50,230.88 209.96,233.96 227.48,233.22 234.12,228.88 232.38,231.09 231.75,244.06 232.62,246.50 234.12,241.00 237.31,233.53 241.00,230.22 239.92,239.34 245.62,246.75 251.75,248.88 249.85,246.68 248.25,233.67 246.78,229.51 245.89,226.91 243.12,223.33 242.44,223.06 240.68,221.86 239.72,222.06 237.31,221.69 Z"],
    [91.4182, 2800, 200, "M 251.70,308.65 C 249.96,310.14 239.17,314.65 235.62,315.38 237.35,316.61 246.02,317.04 250.88,315.62 250.39,317.12 250.65,324.61 251.12,327.62 253.09,325.35 257.35,319.42 257.88,315.88 258.91,316.00 261.78,320.65 262.62,323.88 262.71,323.81 262.52,316.57 262.12,314.00 261.25,309.25 254.75,306.62 251.70,308.65 Z"],
    [81.4059, 3000, 200, "M 247.48,231.83 C 247.48,231.83 249.46,232.11 251.00,231.87 261.46,229.72 263.66,220.43 258.44,212.00 253.24,203.60 246.01,199.13 236.04,200.47 227.97,202.76 226.65,209.69 229.26,217.00 230.17,219.19 231.62,221.12 231.62,221.12"],
    [96.8524, 3200, 200, "M 263.18,316.09 C 276.82,317.00 282.36,313.09 283.30,291.24 283.25,288.01 285.00,283.45 286.26,280.66 286.26,280.66 268.50,285.88 268.50,285.88 262.27,288.18 252.55,291.27 252.91,307.73"],
    [35.3019, 3600, 100, "M 281.88,282.19 C 275.75,285.56 259.50,301.75 258.69,308.12"],
    [37.023, 3800, 100, "M 282.50,282.38 C 281.44,291.75 268.94,309.31 262.25,312.38"],
    [1022.98, 4000, 1000, "M 179.25,422.75 C 179.02,423.01 180.47,372.54 182.50,370.25 182.50,370.25 177.00,370.75 177.00,370.75M 167.75,371.25 C 167.75,371.25 164.00,370.25 164.00,370.25 164.00,370.25 170.75,334.75 170.75,334.75 170.75,334.75 151.25,340.00 151.25,340.00 151.25,340.00 152.00,292.25 152.00,292.25 152.00,292.25 134.75,299.50 134.75,299.50 134.75,299.50 135.25,250.00 135.25,250.00 135.25,250.00 115.50,254.75 115.50,254.75 110.50,232.25 48.50,204.75 36.25,206.50 51.45,222.18 73.00,249.50 77.50,274.25 78.07,274.96 57.52,283.14 56.00,281.25 71.00,289.00 89.64,301.82 105.00,325.25 98.91,322.91 79.74,328.02 77.50,331.75 86.73,332.18 124.55,363.82 127.25,376.25 116.73,374.36 105.64,374.73 98.75,380.00 109.09,382.00 138.55,402.18 142.50,414.00 136.55,411.27 126.55,412.73 123.75,416.50 132.55,420.00 149.45,435.27 163.00,447.00M 161.67,421.67 C 118.00,252.00 64.33,217.33 43.67,210.33"],
    [841.468, 5000, 900, "M 187.33,434.33 C 185.80,434.12 213.16,403.49 223.67,405.67 225.92,405.89 225.49,423.08 224.67,423.00 231.00,425.75 265.38,419.62 276.00,417.00 279.82,419.64 279.74,430.46 278.33,431.67 278.33,431.67 320.00,425.33 320.00,425.33 326.99,424.19 323.83,445.65 322.00,446.00 360.50,452.50 384.25,494.25 383.67,516.67 369.50,499.25 325.00,476.00 312.67,480.33 305.34,481.39 289.50,498.25 282.67,511.33 280.75,494.25 268.53,473.82 268.00,475.00 261.50,481.00 250.50,493.50 245.33,506.67 243.75,483.75 229.25,472.00 218.67,467.33 214.50,479.75 210.50,483.75 200.33,490.33 199.25,474.75 191.50,458.00 183.67,453.67M 190.00,451.50 C 223.50,437.25 351.25,445.25 382.50,513.25"],
    [192.304, 6000, 400, "M 160.33,447.67 C 159.17,446.60 108.09,450.30 115.00,456.67 114.19,462.28 168.59,480.89 170.00,474.33 170.00,474.33 171.33,465.33 171.33,465.33 173.00,463.74 175.47,472.55 175.00,473.00 176.14,480.61 187.31,467.25 191.67,468.00 194.24,469.71 186.44,452.63 185.00,451.67 184.02,456.31 159.94,449.51 160.33,447.67 Z"]
  ]

  bulbs = [
    [
      [95.452, 18000, 800, "M 534.07,194.61 C 533.62,197.05 532.18,199.72 530.31,201.36 527.87,203.49 524.5,204.37 521.31,204.27 521.31,204.27 519.71,204.16 519.71,204.16 518.57,203.97 517.57,203.81 516.51,203.29 514.25,202.18 512.21,199.84 510.54,197.97 509.86,197.22 509.01,196.19 508.23,195.57 507.46,194.96 504.87,194.01 503.87,193.76 503.24,193.6 501.53,193.21 501.1,192.8 500.34,192.08 499.97,190.5 499.84,189.49 499.73,188.59 499.78,188.15 499.94,187.27 500.15,186.09 500.76,185.09 501.57,184.21 501.89,183.86 502.21,183.49 502.67,183.32 503.45,183.05 504.4,183.29 505.19,183.42 505.19,183.42 506.59,183.57 506.59,183.57 507.71,183.76 509.15,183.8 510.26,183.48 511.26,183.18 512.65,182.22 513.62,181.67 514.77,181.02 517.43,179.8 518.69,179.43 522.84,178.2 527.19,179.74 530.45,182.39 531.82,183.51 532.88,184.88 533.59,186.5 534.49,188.58 534.5,190.14 534.47,192.34 534.47,192.34 534.07,194.61 534.07,194.61 Z"],
      [21.906, 18800, 300, "M 500.8,184.98 C 499.87,186.47 499.39,188.54 499.69,190.27 499.87,191.36 500.18,191.72 500.51,192.67 500.33,192.66 500.19,192.68 500.02,192.58 499.43,192.31 499.02,190.95 498.88,190.33 498.39,188.24 498.82,185.96 500.35,184.4 500.8,183.93 501.46,183.18 502.17,183.3 501.66,183.86 501.2,184.33 500.8,184.98 Z"],
      [22.378, 19100, 300, "M 499.18,185.51 C 498.3,187.04 498.26,189.15 498.73,190.81 498.96,191.61 499.12,191.85 499.41,192.56 498.53,192.35 498.23,191.64 497.88,190.87 497.02,188.98 497.29,186.44 498.53,184.79 499.03,184.1 500.25,182.89 501.16,183.22 500.32,184.14 499.86,184.32 499.18,185.51 Z"],
      [21.777, 19400, 300, "M 498.37,184.86 C 497.33,186.37 497.05,188.44 497.53,190.2 497.75,191.01 498.14,191.54 498.45,192.29 496.76,191.46 496.52,189.28 496.63,187.6 496.65,187.3 496.63,186.99 496.71,186.7 496.85,186.15 497.19,185.39 497.5,184.91 498.06,184.05 498.94,183.0 500.06,183.13 499.34,183.83 499.02,183.91 498.37,184.86 Z"],
    ],
    [
      [114.53, 18000, 800, "M 551.79,128.35 C 552.8,131.16 552.91,134.79 551.94,137.62 550.69,141.29 547.71,144.23 544.34,146.04 544.34,146.04 542.6,146.89 542.6,146.89 541.31,147.38 540.17,147.81 538.76,147.9 535.74,148.1 532.22,146.9 529.37,145.96 528.21,145.58 526.7,145.03 525.52,144.85 524.36,144.68 521.09,145.24 519.91,145.59 519.16,145.8 517.14,146.41 516.45,146.25 515.22,145.96 513.9,144.54 513.16,143.56 512.5,142.69 512.29,142.2 511.93,141.2 511.44,139.84 511.47,138.43 511.78,137.04 511.9,136.48 512.01,135.91 512.39,135.46 513.05,134.71 514.18,134.39 515.07,134.05 515.07,134.05 516.61,133.36 516.61,133.36 517.89,132.89 519.42,132.07 520.37,131.07 521.23,130.16 522.1,128.33 522.79,127.17 523.59,125.81 525.63,122.94 526.71,121.8 530.29,118.03 535.73,117.03 540.71,117.83 542.81,118.16 544.72,118.95 546.43,120.21 548.62,121.83 549.56,123.45 550.85,125.76 550.85,125.76 551.79,128.35 551.79,128.35 Z"],
      [26.285, 18800, 300, "M 511.45,138.31 C 511.37,140.41 512.12,142.85 513.46,144.47 514.31,145.49 514.84,145.69 515.76,146.46 515.57,146.56 515.43,146.67 515.2,146.67 514.42,146.74 513.18,145.57 512.66,145.02 510.9,143.13 509.98,140.5 510.63,137.97 510.82,137.21 511.05,136.03 511.85,135.73 511.67,136.62 511.48,137.39 511.45,138.31 Z"],
      [26.855, 19100, 300, "M 510.08,139.83 C 510.08,141.94 511.31,144.16 512.8,145.61 513.51,146.29 513.83,146.45 514.55,147.01 513.51,147.33 512.77,146.77 511.94,146.18 509.92,144.73 508.68,141.93 508.97,139.47 509.08,138.45 509.62,136.47 510.77,136.26 510.45,137.72 510.08,138.18 510.08,139.83 Z"],
      [26.153, 19400, 300, "M 508.85,139.64 C 508.67,141.83 509.62,144.15 511.17,145.69 511.89,146.4 512.62,146.72 513.39,147.31 511.13,147.47 509.58,145.34 508.68,143.53 508.52,143.21 508.32,142.89 508.23,142.54 508.04,141.89 507.94,140.9 507.97,140.21 508.04,138.98 508.32,137.36 509.57,136.82 509.25,137.99 508.95,138.27 508.85,139.64 Z"],
    ],
    [
      [95.452, 18000, 800, "M 511.47,83.17 C 513.34,84.81 514.88,87.42 515.32,89.87 515.89,93.05 514.91,96.4 513.18,99.08 513.18,99.08 512.26,100.4 512.26,100.4 511.52,101.28 510.86,102.05 509.87,102.69 507.75,104.06 504.69,104.6 502.24,105.07 501.24,105.26 499.92,105.47 498.98,105.82 498.07,106.16 495.92,107.89 495.19,108.62 494.73,109.08 493.51,110.34 492.94,110.5 491.93,110.78 490.39,110.29 489.45,109.87 488.63,109.5 488.27,109.23 487.6,108.65 486.7,107.85 486.15,106.82 485.82,105.67 485.68,105.22 485.53,104.75 485.63,104.28 485.8,103.46 486.49,102.78 487.01,102.17 487.01,102.17 487.85,101.04 487.85,101.04 488.6,100.18 489.38,98.96 489.67,97.85 489.93,96.84 489.82,95.15 489.85,94.04 489.88,92.72 490.21,89.81 490.54,88.54 491.62,84.34 495.19,81.41 499.14,79.98 500.8,79.38 502.52,79.18 504.27,79.41 506.52,79.71 507.87,80.51 509.73,81.67 509.73,81.67 511.47,83.17 511.47,83.17 Z"],
      [21.906, 18800, 300, "M 486.08,106.74 C 486.88,108.29 488.41,109.77 490.05,110.41 491.07,110.81 491.54,110.74 492.52,110.93 492.42,111.08 492.37,111.22 492.2,111.31 491.66,111.68 490.28,111.33 489.68,111.13 487.63,110.47 485.9,108.93 485.35,106.82 485.18,106.18 484.88,105.24 485.34,104.69 485.57,105.41 485.74,106.05 486.08,106.74 Z"],
      [22.378, 19100, 300, "M 485.7,108.39 C 486.56,109.93 488.35,111.05 490.02,111.51 490.81,111.72 491.11,111.7 491.87,111.82 491.23,112.47 490.47,112.37 489.62,112.27 487.57,112.03 485.53,110.49 484.75,108.58 484.42,107.79 484.01,106.13 484.76,105.51 485.12,106.71 485.04,107.19 485.7,108.39 Z"],
      [21.777, 19400, 300, "M 484.73,108.75 C 485.49,110.42 487.11,111.73 488.87,112.22 489.68,112.45 490.34,112.39 491.13,112.51 489.55,113.53 487.56,112.61 486.18,111.65 485.93,111.48 485.66,111.34 485.45,111.12 485.05,110.72 484.58,110.04 484.32,109.52 483.88,108.6 483.43,107.31 484.12,106.41 484.35,107.39 484.25,107.71 484.73,108.75 Z"],
    ],
    [
      [114.53, 18000, 800, "M 435.62,48.54 C 438.59,48.76 441.96,50.14 444.14,52.17 446.99,54.81 448.47,58.73 448.75,62.54 448.75,62.54 448.82,64.47 448.82,64.47 448.74,65.86 448.67,67.07 448.18,68.4 447.13,71.24 444.6,73.96 442.58,76.19 441.77,77.09 440.65,78.25 440.0,79.25 439.37,80.24 438.56,83.45 438.39,84.67 438.29,85.45 438.03,87.54 437.59,88.11 436.83,89.11 435.0,89.74 433.8,90.02 432.74,90.26 432.21,90.26 431.14,90.18 429.7,90.08 428.43,89.48 427.28,88.63 426.82,88.29 426.34,87.95 426.09,87.42 425.66,86.52 425.84,85.36 425.89,84.4 425.89,84.4 425.89,82.72 425.89,82.72 425.98,81.35 425.85,79.62 425.32,78.35 424.84,77.19 423.52,75.65 422.74,74.56 421.82,73.27 420.04,70.24 419.43,68.79 417.44,63.99 418.74,58.6 421.49,54.38 422.65,52.6 424.15,51.18 426.0,50.13 428.37,48.79 430.24,48.58 432.86,48.34 432.86,48.34 435.62,48.54 435.62,48.54 Z"],
      [26.285, 18800, 300, "M 428.3,89.45 C 430.19,90.37 432.73,90.68 434.75,90.11 436.03,89.75 436.43,89.34 437.51,88.82 437.52,89.04 437.57,89.21 437.47,89.42 437.22,90.16 435.64,90.82 434.93,91.07 432.49,91.91 429.71,91.68 427.66,90.06 427.04,89.57 426.06,88.88 426.12,88.03 426.86,88.55 427.48,89.05 428.3,89.45 Z"],
      [26.855, 19100, 300, "M 429.14,91.31 C 431.07,92.17 433.59,91.95 435.52,91.18 436.44,90.81 436.71,90.58 437.52,90.15 437.38,91.23 436.57,91.68 435.69,92.2 433.55,93.45 430.49,93.44 428.35,92.18 427.48,91.66 425.88,90.37 426.15,89.23 427.36,90.12 427.63,90.65 429.14,91.31 Z"],
      [26.153, 19400, 300, "M 428.46,92.36 C 430.4,93.41 432.89,93.49 434.93,92.7 435.87,92.33 436.46,91.8 437.31,91.34 436.54,93.46 433.96,94.01 431.95,94.09 431.59,94.11 431.22,94.16 430.87,94.11 430.19,94.01 429.25,93.71 428.63,93.39 427.53,92.83 426.17,91.92 426.18,90.56 427.11,91.33 427.25,91.71 428.46,92.36 Z"],
    ],
    [
      [95.452, 18000, 800, "M 371.09,77.68 C 373.23,76.41 376.19,75.75 378.65,76.09 381.85,76.53 384.73,78.5 386.75,80.97 386.75,80.97 387.72,82.25 387.72,82.25 388.33,83.23 388.86,84.1 389.16,85.24 389.8,87.67 389.38,90.75 389.06,93.23 388.94,94.23 388.73,95.56 388.77,96.55 388.81,97.53 389.79,100.11 390.26,101.02 390.56,101.6 391.38,103.16 391.35,103.75 391.31,104.8 390.36,106.11 389.68,106.87 389.07,107.54 388.71,107.8 387.94,108.25 386.91,108.86 385.75,109.06 384.56,109.03 384.09,109.02 383.6,109.02 383.17,108.78 382.45,108.37 382.01,107.49 381.59,106.81 381.59,106.81 380.79,105.66 380.79,105.66 380.2,104.69 379.28,103.57 378.31,102.95 377.43,102.39 375.79,101.97 374.74,101.6 373.5,101.16 370.83,99.95 369.73,99.24 366.07,96.92 364.38,92.62 364.24,88.42 364.19,86.66 364.53,84.96 365.29,83.36 366.26,81.32 367.44,80.28 369.12,78.87 369.12,78.87 371.09,77.68 371.09,77.68 Z"],
      [21.906, 18800, 300, "M 385.65,109.1 C 387.38,108.83 389.26,107.83 390.37,106.47 391.07,105.62 391.15,105.15 391.64,104.28 391.75,104.42 391.86,104.51 391.9,104.71 392.08,105.33 391.32,106.53 390.95,107.04 389.69,108.79 387.68,109.96 385.51,109.83 384.85,109.79 383.85,109.79 383.48,109.18 384.24,109.19 384.9,109.23 385.65,109.1 Z"],
      [22.378, 19100, 300, "M 387.11,109.98 C 388.84,109.64 390.46,108.29 391.41,106.84 391.86,106.15 391.93,105.86 392.28,105.18 392.7,105.98 392.36,106.68 392.01,107.45 391.15,109.33 389.05,110.79 386.99,110.95 386.15,111.01 384.44,110.89 384.08,109.98 385.33,110.02 385.77,110.24 387.11,109.98 Z"],
      [21.777, 19400, 300, "M 387.16,111.02 C 388.98,110.81 390.72,109.67 391.73,108.15 392.2,107.45 392.35,106.81 392.71,106.09 393.19,107.91 391.7,109.51 390.36,110.53 390.12,110.72 389.9,110.93 389.63,111.06 389.12,111.32 388.33,111.56 387.76,111.64 386.74,111.78 385.38,111.81 384.74,110.88 385.74,110.95 386.01,111.15 387.16,111.02 Z"],
    ],
  ]

  computerParts = [
    [1824.9290771484375, 24000, 300, "M 1910.0,30.0 Q 1910.0,10.0 1930.0,10.0 L 2470.0,10.0 Q 2490.0,10.0 2490.0,30.0 L 2490.0,350.0 L 1910.0,350.0 Z"],
    [1650, 24500, 300, "M 1930.0,40.0 L 2470.0,40.0 L 2470.0,325.0 L 1930.0,325.0 Z"],
    [684.9292602539062, 25000, 300, "M 1910.0,350.0 L 1910.0,390.0 Q 1910.0,410.0 1930.0,410.0 L 2470.0,410.0 Q 2490.0,410.0 2490.0,390.0 L 2490.0,350.0"],
    [71.1972427368164, 25500, 300, "M 2200.0,372.0 Q 2193.0,368.0 2190.0,375.0 L 2190.0,380.0 C2190.0,385.0 2193.0,393.0 2200.0,388.0 Q 2207.0,393.0 2210.0,383.0 Q 2205.0,378.0 2210.0,373.0 Q 2206.0,368.0 2200.0,373.0"],
    [21.1265926361084, 26000, 300, "M 2200.0,369.0 Q 2207.0,369.0 2207.0,363.0 Q 2200.0,363.0 2200.0,369.0"],
    [375.86639404296875, 26500, 300, "M 2140.0,410.0 C 2135.0,450.0 2135.0,470.0 2100.0,480.0 L 2300.0,480.0 C 2265.0,470.0 2265.0,450.0 2260.0,410.0"],
    [210, 27000, 300, "M 2100.0,480.0 L 2100.0,485.0 L 2300.0,485.0 L 2300.0,480.0"],
  ];

  petalParts = [
    [127.422119140625, 16000, 500, "M 425.16,328.19 C 424.46,326.1 418.68,297.03 421.18,292.7 423.87,288.13 422.47,279.22 423.83,270.79 423.86,270.64 424.09,270.66 424.36,271.16 424.98,272.77 426.61,288.61 429.0,290.87 432.98,293.92 433.45,319.23 433.24,325.37 433.04,328.74 430.98,330.82 429.49,331.12 427.76,331.41 425.58,329.78 425.16,328.19 Z"],
    [104.63362884521484, 16500, 500, "M 423.41,274.29 C 421.57,252.99 422.59,183.59 430.57,170.49"],
    [833.68701171875, 17000, 500, "M 373.09,119.72 C 373.23,119.42 431.1,167.09 430.04,169.39M 388.02,106.82 C 386.62,110.01 428.45,167.23 430.48,167.53M 409.3,94.95 C 407.62,95.45 426.55,168.13 430.83,166.85M 432.0,167.34 C 434.13,168.61 504.77,125.99 504.2,125.65M 432.15,168.12 C 432.93,170.58 512.79,142.28 512.39,141.01M 432.05,169.2 C 433.79,169.31 518.79,166.74 516.48,166.6M 431.85,170.08 C 432.13,171.83 497.81,189.53 497.45,187.28M 371.86,137.32 C 371.9,137.31 430.61,169.12 429.22,169.62M 431.9,94.95 C 430.23,94.97 425.47,165.36 431.39,165.27M 487.23,110.5 C 487.29,111.77 432.91,171.87 432.61,165.37M 462.78,102.01 C 462.91,102.51 431.86,166.59 431.68,165.89"],
  ];

  captures = [
    [300, 300, 13000, 13300],
    [700, 100, 13500, 13800],
    [400, 90, 14000, 15300, -0.09, 15000, 0.005],
  ];

  constructor() {
    this.onScroll(null);
  }


  onScroll($event) {
    this.scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
  }

  offset(part) {
    return this.scrollTop < part[1] ? 1 : (this.scrollTop - part[1] < part[2] ? 1 - Math.min(this.scrollTop - part[1], part[2]) / part[2] : 0);
  }

  petalPos(part, root) {
    let t = this.scrollTop - 9000;
    let base = 'rotate(' + part[0] + ' ' + root + ')';


    if (part[7]) {
      t = t - part[7];
    }

    if (t <= 0 || !part[7]) {
      return base;
    }
    
    if (part[7]) {
      if (part[8] && t > part[8]) {
        return 'translate(' + (t * part[5] / 2.0) + ' ' + (part[4] * part[8] / 2.0 + part[6] * part[8] ** 2 / 4.0) + ') rotate(' + (part[3] * part[8] / 2.0) + ' ' + root + ') ' + base;
      } else {
        return 'translate(' + (t * part[5] / 2.0) + ' ' + (part[4] * t / 2.0 + part[6] * t ** 2 / 4.0) + ') rotate(' + (part[3] * t / 2.0) + ' ' + root + ') ' + base;
      }
    }
  }

  backgroundPos() {
    let offset = this.scrollTop - 12000;
    let x = offset > 0 ? (-offset / 4) : 0;
    return 'translate(' + x + ' 0)';
  }

  captureClass(capture) {
    return this.scrollTop >= capture[2] && this.scrollTop <= capture[3] ? 'faded' : '';
  }

  dandelionClass() {
    return this.scrollTop >= 15000 ? 'faded-out' : '';
  }

  cTransform(capture) {
    let transform = '';

    if (capture[4]) {
      transform += 'translate(' + ((this.scrollTop - capture[2]) * capture[4]) + ' 0)';
    }

    if (capture[5] && this.scrollTop - capture[5] > 0) {
      let rootX = capture[0] + 50;
      let rootY = capture[1] + 50;
      let scale = 1 + (this.scrollTop - capture[5]) * capture[6];
      transform +=  ' translate(' + rootX + ' ' + rootY + ') scale(' + scale + ' ' + scale + ') translate(' + (-rootX) + ' ' + (-rootY) + ')';
    }

    return transform;
  }
}
