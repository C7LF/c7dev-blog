import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "html,body": {
      fontFamily: 'Roboto,sans-serif'
    },
    "h1,h2,h3,h4": {
      fontFamily: 'Roboto,sans-serif'
    }
  }
}

delete Wordpress2016.googleFonts
delete Wordpress2016.headerFontFamily
delete Wordpress2016.bodyFontFamily

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
