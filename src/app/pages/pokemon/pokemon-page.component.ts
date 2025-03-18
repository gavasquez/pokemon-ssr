import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { sign } from 'crypto';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemon-page',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);

  private pokemonService = inject(PokemonsService);
  private route = inject(ActivatedRoute);

  public pokemon = signal<Pokemon | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;
    this.pokemonService.loadPokemon(id)
    .pipe(
      tap( ({ name, id}) => {
        const pageTitle = `#${id} - ${name}`;
        const pageDescription = `Página del Pokémon #${id} - ${name}`;

        this.title.setTitle(pageTitle);

        this.meta.updateTag({ name: 'description', content: pageDescription });
        this.meta.updateTag({ name: 'og:title', content: pageTitle });
        this.meta.updateTag({ name: 'og:description', content: pageDescription });
        this.meta.updateTag({ name: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` });
      })
    )
    .subscribe(pokemon => this.pokemon.set(pokemon));;
  }
}
