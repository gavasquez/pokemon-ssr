import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonLiskSkeletonComponent } from './ui/pokemon-lisk-skeleton/pokemon-lisk-skeleton.component';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonLiskSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  /* public isLoading = signal(true);

  private appRef = inject(ApplicationRef);

  private $appState = this.appRef.isStable.subscribe((isStable) => {
    console.log({ isStable });
  }); */

  ngOnInit(): void {
    /* setTimeout(() => {
      this.isLoading.set(false);
      }, 2000); */
  }

  /* ngOnDestroy(): void {
    console.log('destroy');
    this.$appState.unsubscribe();
  } */
}
