import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemon-lisk-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-lisk-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonLiskSkeletonComponent { }
