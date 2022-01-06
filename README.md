# Belvo Challenge

Evaluate general front end development skills and capabilities.

| <img width="413" alt="Screen Shot 2022-01-05 at 23 14 01" src="https://user-images.githubusercontent.com/13490305/148320409-9d410b61-aa78-4fc6-8e1c-5fc8dba03fa2.png"> | <img width="414" alt="Screen Shot 2022-01-05 at 23 14 26" src="https://user-images.githubusercontent.com/13490305/148320415-54ca9cee-1719-4799-a67f-8830abebffa5.png"> | <img width="415" alt="Screen Shot 2022-01-05 at 23 15 46" src="https://user-images.githubusercontent.com/13490305/148320416-debdce14-bc6c-4faa-a3c9-0751ab668b4f.png"> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="414" alt="Screen Shot 2022-01-05 at 23 36 06" src="https://user-images.githubusercontent.com/13490305/148320420-60f2c511-340d-4631-a0b0-49e4e19e4f63.png"> | <img width="414" alt="Screen Shot 2022-01-05 at 23 53 14" src="https://user-images.githubusercontent.com/13490305/148320750-637f39c6-aa30-4462-a3d4-06097b5d6607.png"> | <img width="415" alt="Screen Shot 2022-01-05 at 23 48 56" src="https://user-images.githubusercontent.com/13490305/148320421-5d1bc13b-bc95-424e-abd8-100f377d7fb3.png"> |

## Summary

- [Architecture](#architecture)
- [Built With](#built-with)
- [Installation](#installation)
- [Author](#author)

## Architecture

    .
    ├── ...
    ├── src
    │   ├── assets          # files like images, icons, docs, etc.
    │   ├── components      # Basic common components for building the project
    │   ├── pages           # Project screens
    │   │   ├── ReceiveCrypto
    │   │   ├── TransferCrypto
    │   │   ├── Login
    │   │   ├── NotFound
    │   │   └── Wallet
    │   ├── services         # Project services
    │   │   ├── contacts
    │   │   ├── login
    │   │   ├── requesting
    │   │   ├── sending
    │   │   └── wallet
    │   └── App.js          # App Loader
    └── ...

## Built With

- [React](https://reactjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Material UI](https://mui.com/)

## Installation

1 - First of all clone this repo to your local machine using:

- https://github.com/anaarezo/belvo-challenge.git

2 - Run yarn to install the required packages

```shell
yarn
```

3 - Run dev enviroment, for this you can choose into:

```shell
yarn dev
```

or

```shell
yarn start
```

4 - Your browser will be open automatically, if not open your browser and type:

```
http://localhost:3000/ # Or 4000 visit .env and .env.local files
```

5 - To run tests type:

```shell
yarn tests
```

## Comments:

### Points to improve

Note: I didn't finish these items due to lack of time, I ended up getting carried away with the project. I wrote this section to explain.

- Isolate created routes in a file
- Fix Responsiveness in some parts like tablet and web
- Improve semantic using accessibility(WCAG) and SEO(to better indexation)
- Isolate Endpoint Calls to Improve Architecture
- Why didn't I do all the tests
- Create components to reuse in case of pages Send and Request cryptocurrencies
- Create CustomHooks to improve architecture
- Improve tests, i started to create unit tests, but in the last hours it ended up giving a problem with babel, and I decide to remove, but i am able to write the jest tests
- Put colors in a theme
- Remove unused code
- I use the Material UI cause, is a good and easy library which provides a robust, customizable, and accessible components
- In a Deployment/Production use case I would put endpoint/API calls inside a BFF(BackEnd for Front End) if possible to create a dumb front end, developing security improvements like data-source to transact data and customer informations according to GDPR, call only the BFF API to transact in multiple micro-services.
- Improve all this creating based in micro-frontend pattern obtaining a more "dev-experience", having a better maintainability and modularization

## Author

Ana Laura Arezo

- [LinkedIn](https://www.linkedin.com/in/anaarezo/)
- [GitHub](https://github.com/anaarezo)
- [E-mail](mailto:laura.arezo@gmail.com)
- 💡 Feel free to contact me if you have difficulties running the project or if you have questions!

## <br />

# 😀 Thank you Belvo !!!
