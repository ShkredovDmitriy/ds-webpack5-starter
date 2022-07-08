# ds-webpack5-starter

Webpack 5 based template for quick website development 

#### Libraries

- Pug
- SCSS
- Typescript
- Jest
- Babel
- Favicons
- FTP Deploy

#### Structure

```
<<<<<<< HEAD
dist/                # build files
=======
config/              # webpack config files
dist/                # project build files
node_modules/        # all modules and dependencies
pixel-perfect/       # images for a perfect layout, browser addon Perfect Pixel Pro
>>>>>>> 1010b92b5ceb842459a32542f33040eb90cd0a0c
src
  |_ app/            # ts and js files
  |_ assets/         # images, fonts, documents, sprites
  |_ blocks/         # header, footer, section
  |_ components/     # nav, ul
  |_ elements/       # a, span, button
  |_ pages/          # entry points for pages
  |_ styles/         # style and style libs
  |_ templates/      # templates for pages
  |_ tests/          # files for unit tess
.env-sample          # sample config file
.eslintignore        # files excluded from eslint
.gitignore           # files excluded from uploading to github
.stylelintignore     # files excluded from stylelint
.stylelintrc.js      # stylelint config file
deploy.js            # script for ftp deploing
jest.config.js       # jest config file
package-lock.json    # standart file
package.json         # standart file
README.md            # project documentation
tsconfig.json        # typescript config file
webpack.dev.js       # webpack config for developming
webpack.prod.js      # webpack config for production
```

## Installation
Please use nodejs version 16 or newer

```
npm install
```


#### Install

```
npm install
```

#### Start

```
npm run dev
```

#### Build

```
npm run build
```

#### FTP Deploy

You can upload build files to ftp server, specify ftp settings in .env file

```
npm run deploy
```

## License

This project is under the MIT license.
