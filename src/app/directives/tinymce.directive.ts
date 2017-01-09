 import {
   AfterViewInit,
   ChangeDetectorRef,
   Directive,
   EventEmitter,
   forwardRef,
   Input,
   Output,
   OnDestroy
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TinymceDirective),
  multi: true
}

@Directive({
  inputs: ['tinyEditor'],
  selector: '[tinyEditor]',
  providers: [CUSTOM_VALUE_ACCESSOR]
})

export class TinymceDirective implements AfterViewInit, ControlValueAccessor, OnDestroy {
  private val = "";
  editor;

  @Input() selector: string;

  @Input()
  get ngModel() {
    return this.val;
  }

  set ngModel(val) {
    this.val = val;
  }

  @Output() ngModelChange = new EventEmitter();

  private options = {
    plugins: ['link', 'paste', 'table', 'codesample', 'lists', 'emoticons'],
    skin_url: '/assets/skins/lightgray',
    themes: 'modern',
    codesample_languages: [
      {text: 'Ruby', value: 'ruby'}
    ],
    toolbar1: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | codesample | emoticons',
    force_br_newlines : false,
    force_p_newlines : false,
    content_css: '/assets/style.css'
  }

  constructor(private _changeRef: ChangeDetectorRef) {

  }

  onChange = (_) => {};
  onTouched = () => {};

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  writeValue(value: any): void {
    var selector = tinymce.get(this.selector);
    if (selector && value) {
      selector.setContent(value, {format : 'raw'});
    }
  }

  valueChange() {
    this.valueOnChange(false);
  }

  valueOnChange(change: boolean) {
    this.val = this.editor.getContent();
    this.ngModelChange.emit(this.val);

    if (change) {
      this._changeRef.detectChanges();
    }
  }

  ngAfterViewInit() {
    let that = this;
    let options = this.options;

    options['selector'] = this.selector ? '#' + this.selector : '.wysiwyg';
    options['height'] = 500;
    options['schema'] = "html5";
    options['theme'] = "modern";

    options['init_instance_callback'] = function (editor) {
      that.writeValue(that.ngModel);
      editor.on('change', function (e) {
        that.valueChange();
      });
      editor.on('blur', function (e) {
        that.valueOnChange(true);
      });
      editor.on('keyup', function (e) {
        that.valueChange();
      });
      editor.on('PastePostProcess', function (e) {
        that.valueChange();
      });
    }

    options['setup'] = editor => {
      this.editor = editor;
    }

    tinymce.init(options);
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
