import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-essential-tr-feminino/47/D12-9111-847/D12-9111-847_zoom1.jpg?ts=1561490457&"
          alt="Tênis"
        />

        <strong>Tênis Nike Flex Essential TR Feminino - Rosa e Cinza</strong>

        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom1.jpg?ts=1569489067&"
          alt="Tênis"
        />
        <strong>Tênis Nike Revolution 5 Feminino - Preto e Branco</strong>
        <span>R$ 249,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-couro-feminino/06/D12-1940-306/D12-1940-306_zoom1.jpg?ts=1579792734&"
          alt="Tênis"
        />
        <strong>Tênis Nike Court Royale Couro Feminino - Rosa e Branco</strong>
        <span>R$ 189,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-feminino/14/HZM-0361-114/HZM-0361-114_zoom1.jpg?ts=1579778435&"
          alt="Tênis"
        />
        <strong>Tênis Nike Court Royale Feminino - Branco e Verde</strong>
        <span>R$ 199,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-feminino/05/HZM-1860-805/HZM-1860-805_zoom1.jpg?ts=1575471675&"
          alt="Tênis"
        />
        <strong>Tênis Nike Court Lite 2 Feminino - Branco e Vinho</strong>
        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/chuteira-society-nike-mercurial-superfly-7-club-tf/72/HZM-1893-172/HZM-1893-172_zoom1.jpg?ts=1564076842&"
          alt="Tênis"
        />
        <strong>
          Chuteira Society Nike Mercurial Superfly 7 Club TF - Preto e Cinza
        </strong>
        <span>R$ 219,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-essential-tr-feminino/47/D12-9111-847/D12-9111-847_zoom1.jpg?ts=1561490457&"
          alt="Tênis"
        />

        <strong>Tênis Nike Flex Essential TR Feminino - Rosa e Cinza</strong>

        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom1.jpg?ts=1569489067&"
          alt="Tênis"
        />
        <strong>Tênis Nike Revolution 5 Feminino - Preto e Branco</strong>
        <span>R$ 249,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-couro-feminino/06/D12-1940-306/D12-1940-306_zoom1.jpg?ts=1579792734&"
          alt="Tênis"
        />
        <strong>Tênis Nike Court Royale Couro Feminino - Rosa e Branco</strong>
        <span>R$ 189,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
