# Festival GongFuCha – 11ty Starter

## Prérequis

```bash
node --version   # >= 18
npm install -g @11ty/eleventy
```

## Développement local

```bash
npm install
npx @11ty/eleventy --serve
```

## Déploiement GitHub Pages

Le workflow CI (_`.github/workflows/deploy.yml`_) construit le site puis pousse le
dossier `_site/` sur la branche `gh-pages` pour servir **https://festival.gongfucha.fr**.

## Personnaliser

* **Accroche** : `src/index.njk`
* **Programme** : `src/data/programme.yaml`
* **Palette / espaces** : `src/styles/tokens.css`
* **Hero photo** : placer le fichier `hero.jpg` dans `src/img/`

## Newsletter

Remplacez `YOUR_MAILERLITE_URL` dans `index.njk` par le formulaire **Mailerlite** intégré.

