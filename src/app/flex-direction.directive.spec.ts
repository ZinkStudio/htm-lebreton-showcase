import { FlexDirectionDirective } from './flex-direction.directive';
import {ElementRef, Renderer2} from '@angular/core';

import {BreakpointsService} from 'angular-breakpoints';

describe('FlexDirectionDirective', () => {
  it('should create an instance', () => {
      const directive = new FlexDirectionDirective(ElementRef.prototype, Renderer2.prototype, BreakpointsService.prototype);
    expect(directive).toBeTruthy();
  });
});
