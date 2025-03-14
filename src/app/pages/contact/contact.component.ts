import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactComponent {}
