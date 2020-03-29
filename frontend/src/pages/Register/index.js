import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";
import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      city,
      email,
      name,
      uf,
      whatsapp
    };
     console.log(data.whatsapp)
    try{
      const res = await api.post('ongs', data);
  
      alert(`Seu ID de acesso: ${res.data.id}`);
      history.push('/');

    } catch (err) {
      alert("Erro no cadastro, tente novamente");
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"></img>
          <h1>Cadastro</h1>
          <p>
            Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size="16" color="e02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            value={name}
            placeholder="nome da Ong"
            onChange={e => setName(e.target.value)}
          />
          <input
            value={email}
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            value={whatsapp}
            placeholder="WhatsApp"
            onChange={e => setWhatsApp(e.target.value)}
          />

          <div className="input-group">
            <input
              value={city}
              placeholder="Cidade"
              onChange={e => setCity(e.target.value)}
            />
            <input
              value={uf}
              placeholder="UF"
              style={{ width: 80 }}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
