Hugo supports postcss and scss (Sass). Here's how to set up a theme

<https://dev.to/divrhino/how-to-add-tailwindcss-to-your-hugo-site-5290>
<https://praveenjuge.com/blog/install-tailwind-on-hugo/>

```
hugo new site . --force  // new hugo site in current dir
hugo new theme xyz
add theme to config.toml
mkdir -p themes/xyz/assets/css/  // p flag  to create nonexisting dirs


npm init
npm i --save-dev postcss@latest postcss-cli@latest // required for postcss
npm i --save-dev autoprefixer@latest tailwindcss@latest  

// configure postcss plugins

cd themes/xyz/assets/css/
npx tailwindcss init -p
touch styles.scss  // sass file
```

add these tailwind imports to styles.scss

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
hugo server -D
```