import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/5309034?s=460&u=746a886df8179c505db333aec80c197943e036fa&v=4" alt="Willian Soares" />
        <div>
          <strong>Willian Soares</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por minhas explosões.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>
            R$ 80,00
              </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em Contato
            </button>
      </footer>

    </article>
  )
}

export default TeacherItem;