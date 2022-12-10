import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasePage from "../BasePage/";

export default function RulesPage() {
  return (
    <BasePage pageName="Rules">
      <Box
        sx={{
          background: "#393E41",
          border: "1px solid #F0F0F0",
          padding: "1.5em",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          width: "75%",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#F0F0F0", fontSize: "1rem" }}
        >
          1. Quanto mais conhecimento bom, melhor!
          <Typography
            variant="subtitle2"
            sx={{ color: "#898C8E", fontSize: "1rem" }}
          >
            O Helpfy é uma biblioteca de soluções prontas representadas por um
            problema (a pergunta) e as soluções (respostas), da forma mais limpa
            possível, com o mínimo de ruído e o máximo de foco. Perguntas e
            respostas são escritas uma vez e lidas centenas de vezes. Todo o
            conteúdo do site é otimizado para leitura, para desenvolvedores que
            chegam ao site através de uma busca. Ter conteúdo útil para a
            comunidade é primário; como este conteúdo foi criado é secundário.
            Quaisquer métodos para criar conteúdo útil para o site é bem-vindo,
            exceto quando for plágio.
          </Typography>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#F0F0F0", fontSize: "1rem" }}
        >
          2. Juntos para o bem da comunidade
          <Typography
            variant="subtitle2"
            sx={{ color: "#898C8E", fontSize: "1rem" }}
          >
            O Helpfy é um esforço coletivo para criar mais conteúdo de qualidade
            sobre as diversas áreas dos cursos da UFCG (Universidade Federal de
            Campina Grande). O site existe graças à colaboração de muitos
            usuários ativos, como você, e não devido a uma única e grandiosa
            pessoa. Juntos criamos conteúdo útil para toda a comunidade da
            universidade. Qualquer usuário que se depara com um problema pode
            usar as respostas do site de graça. A comunidade, é o resultado da
            colaboração. Juntos definimos o futuro do nosso site e da
            comunidade.
          </Typography>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#F0F0F0", fontSize: "1rem" }}
        >
          3. Respeite os outros
          <Typography
            variant="subtitle2"
            sx={{ color: "#898C8E", fontSize: "1rem" }}
          >
            A forma como tratamos uns aos outros é a chave para o sucesso. Nosso
            objetivo primário é criar e dar suporte à própria comunidade. Tudo
            mais virá disso. Qualquer interação com o site começa com o respeito
            mútuo entre colegas, não importa as circunstâncias, reputação,
            conhecimento, ou o que for. Na nossa comunidade, todos devem se
            sentir seguros e bem-vindos ao fazer perguntas ou respondê-las.
          </Typography>
        </Typography>
      </Box>
    </BasePage>
  );
}
