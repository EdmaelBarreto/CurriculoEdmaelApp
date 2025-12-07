# 📱 CurrículoApp

Aplicativo simples e funcional criado para apresentar seu **currículo profissional** em formato de app mobile. Desenvolvido com foco em iniciantes, utilizando **React Native + Expo** e podendo ser aberto pelo **Expo Go** no celular.

---

## 🎯 Objetivo do Projeto

O objetivo do **CurrículoApp** é permitir que qualquer pessoa apresente seu currículo de forma moderna, rápida e acessível, usando um **aplicativo mobile com foto, contatos, formação, experiência e habilidades**.

Este app é ideal para:

* 📲 Enviar para recrutadores
* 🎓 Usar em portfolios de desenvolvedores iniciantes
* 🧑‍💼 Personalizar seus dados rapidamente

---

## 🛠️ Tecnologias Utilizadas

* **React Native**
* **Expo (Expo Go)**
* **JavaScript**
* **VSCode**
* **Expo CLI / Codespace (opcional)**

---

## 📂 Estrutura do Projeto

```
CurriculoApp/
 ├── assets/
 │    ├── foto.jpg
 │    ├── github.png
 │    ├── linkedin.png
 │    └── lattes.png
 ├── app/
     └── index.js


```

---

## 📥 Como Rodar o Projeto (Passo a Passo para Iniciantes)

### 🟦 1. Instalar o Expo no PC

Abra o terminal e rode:

```
npm install -g expo-cli
```

### 🟩 2. Abrir o projeto no VSCode

* Vá em **File > Open Folder**
* Escolha a pasta **CurriculoApp**

### 🟨 3. Instalar dependências

```
npm install
```

### 🟧 4. Iniciar o Expo

```
expo start
```

Isso abrirá o **Metro Bundler** no navegador.

---

## 📱 Como Abrir no Celular com Expo Go

### Android / iPhone:

1. Baixe o app **Expo Go** na Play Store ou App Store.
2. No navegador do Expo (quando você rodar `expo start`):

   * Aparecerá um **QR Code**.
3. Abra o **Expo Go** → clique em **Scan QR Code**.
4. Aponte a câmera para o QR Code.

O aplicativo abrirá instantaneamente no seu celular.

---

## 🔧 Funcionalidades do CurrículoApp

✔️ Exibir foto de perfil
✔️ Mostrar nome, título profissional e resumo
✔️ Exibir formação
✔️ Exibir experiências profissionais
✔️ Exibir habilidades e competências
✔️ Botões de contato (WhatsApp, email, LinkedIn)
✔️ Layout simples, limpo e responsivo

---

## 🎨 Personalização

Você pode alterar facilmente:

* As cores (em `styles`)
* A foto (`assets/profile.jpg`)
* Os textos no componente `HomeScreen.js`
* Ícones e fontes usando Expo Vector Icons

---

## 🔍 Estrutura do Código

### `App.js`

Carrega as telas e inicializa o app.

### `HomeScreen.js`

Exibe o conteúdo completo do currículo.

### `Card.js`

Componente reutilizável para organizar cada sessão do currículo.

### `/assets`

Armazena imagens como:

* Foto do currículo
* Ícone do app

---

## 🧪 Testes

Você pode testar no próprio Expo Go (celular) ou no simulador do navegador via:

* **Run in Web (W)**
* **Run on Android emulator**
* **Run on iOS simulator** (somente Mac)

---

## 🧰 Possíveis Erros e Soluções

### ❌ O QR Code não aparece

**Solução:**
Use este comando no terminal:

```
expo start --tunnel
```

### ❌ O app não abre no celular

**Solução:**
Certifique-se de que o celular e o PC estão na **mesma rede Wi-Fi**.

### ❌ Imagem não aparece

**Solução:**
Verifique se o nome da imagem no código é exatamente igual ao arquivo na pasta.

---

## 📌 Licença

Código aberto, livre para estudos, personalização e envio para portfólio.

---
