/** @jsx jsx */
import { Button, Flex, jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      sx={{
        bg: `darken`,
        marginBottom: `1.45rem`,
      }}
    >
      <Flex
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 sx={{ margin: 0, flex: `1 1 auto` }}>
          <Link
            to="/"
            sx={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Button
          onClick={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
        >
          Toggle {colorMode === "default" ? "dark" : "Light"}
        </Button>
      </Flex>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
