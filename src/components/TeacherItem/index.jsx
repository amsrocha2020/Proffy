import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6360235?s=460&u=78235cf716ab3065429e7384a442cc1757d7be70&v=4" alt="Miguel Rocha"/>
              <div>
                <strong>Miguel Rocha</strong>
                <span>Química</span>
              </div>  
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae modi blanditiis praesentium nostrum magnam obcaecati eum iure, laborum quibusdam tempore temporibus! Laboriosam repellendus neque obcaecati nesciunt provident aut placeat sed.
              <br/><br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore neque sequi labore laborum aut, laboriosam quis earum doloremque consectetur ex itaque eum ullam fugit consequuntur unde dolorum sint nisi!
            </p>
            <footer>
              <p>
                Preço/hora 
                <strong>20€</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contacto
              </button>
            </footer>
          </article>
  )
}

export default TeacherItem;