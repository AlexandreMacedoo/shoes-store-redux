import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  padding-bottom: 200px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 0 auto;
  max-width: 1020px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.07);

    img {
      align-self: center;
      max-width: 100%;
      margin-bottom: 10px;
    }

    > a {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      text-decoration: none;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #ff9f26;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ff9f26')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;

  svg {
    height: 150px;
    width: 100px;
    fill: #ff9f26;
  }
`;
