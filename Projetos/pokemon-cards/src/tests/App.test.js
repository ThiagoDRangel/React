import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

//getByRole

const pokemonMock = {
    cards: [
        {
            id: "xyp-XY174",
            name: "Pikachu-EX",
            nationalPokedexNumber: 25,
            imageUrl: "https://images.pokemontcg.io/xyp/XY174.png",
            imageUrlHiRes: "https://images.pokemontcg.io/xyp/XY174_hires.png",
            types: ["Lightning"],
            supertype: "Pokémon",
            subtype: "EX",
            hp: "130",
            retreatCost: ["Colorless"],
            convertedRetreatCost: 1,
            number: "XY174",
            artist: "5ban Graphics",
            rarity: "Common",
            series: "XY",
            set: "XY Black Star Promos",
            setCode: "xyp",
            text: [
                "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.",
            ],
            attacks: [
                {
                    cost: ["Lightning", "Colorless"],
                    name: "Thunder Shock",
                    text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                    damage: "30",
                    convertedEnergyCost: 2,
                },
                {
                    cost: ["Lightning", "Lightning", "Colorless"],
                    name: "Mega Thunderbolt",
                    text: "Discard all Energy attached to this Pokémon.",
                    damage: "160",
                    convertedEnergyCost: 3,
                },
            ],
            resistances: [
                {
                    type: "Metal",
                    value: "-20",
                },
            ],
            weaknesses: [
                {
                    type: "Fighting",
                    value: "×2",
                },
            ],
        },
    ],
};

describe('Testes no App.js', () => {
    it('Verificar se o input e o button estão definidos em tela', () => {
        render(<App />);

        const button = screen.getAllByRole('button', { name: /pesquisar/i });

        const input = screen.getAllByRole('textbox');

        expect(button).toBeDefined();
        expect(input).toBeDefined();
    })
    it('Digitar no input e clicar em pesquisar', () => {
        render(<App />);

        const inputElem = screen.getByRole('textbox');

        //userEvent.type(inputElem, 'Pikachu');
        fireEvent.change(inputElem, { target: { value: 'Pikachu' } })

        expect(inputElem).toHaveValue('Pikachu');
    })

    it('Testando a requisição para a API de forma simulada', async () => {

        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json: () => Promise.resolve(pokemonMock)
            })
        })

        render(<App />);

        const inputElem = screen.getByRole('textbox');
        const buttonElem = screen.getByRole('button', { name: /pesquisar/i });

        //fireEvent.change(inputElem, { target: { value: 'Pikachu' } })
        userEvent.type(inputElem, 'Pikachu');
        userEvent.click(buttonElem);

        const title = await screen.findByText(/Pikachu/i);

        expect(title).toBeDefined();

    })

    it('Testando a requisição para a API de forma simulada com SpyON', async () => {

        const fetchMock = {
            json: async () => pokemonMock
        }

        jest.spyOn(global, 'fetch').mockImplementation(async () => fetchMock);

        render(<App />);

        const inputElem = screen.getByRole('textbox');
        const buttonElem = screen.getByRole('button', { name: /pesquisar/i });

        //fireEvent.change(inputElem, { target: { value: 'Pikachu' } })
        userEvent.type(inputElem, 'Pikachu');
        userEvent.click(buttonElem);

        const title = await screen.findByText(/Pikachu/i);

        expect(title).toBeDefined();

    })
})