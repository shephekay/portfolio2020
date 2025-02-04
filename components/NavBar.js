import navbarsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js"
import Button from "./CustomButtons/Button.js";
import Header from './Header/Header'
import HeaderLinks from './Header/HeaderLinks'
import { makeStyles } from "@material-ui/core/styles";
import NavPills from './NavPills/NavPills'
import React from 'react'
import { List, ListItem } from "@material-ui/core";
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(navbarsStyle)

export default function NavBar() {
    const classes = useStyles()
    const style = {width: '100vw', margin: '0 auto' }
    const linkStyle={color: 'white', textDecoration:'none'}
    return (
        <div className='navbar' id='navigation'>
            <Header 
                style={style}
                brand="Sheila Kelley" 
                color='info'
                links={
                    <List className={classes.list + ' ' + classes.mlAuto}>
                        <ListItem className={classes.listItem}>
                            <Button
                                // href='index'
                                className={classes.navLink}
                                // onClick={e => e.preventDefault()}
                                color='transparent'>
                                    <Link href='/' onClick={(e)=> {preventDefault(e)}} style={linkStyle}>Home</Link> 
                            </Button>
                        </ListItem>

                        <ListItem className={classes.listItem}>
                            <Button
                                href='about'
                                className={classes.navLink}
                                // onClick={e => e.preventDefault()}
                                color='transparent'>
                                    About
                            </Button>
                        </ListItem>

                        <ListItem className={classes.listItem}>
                            <Button
                                href='portfolio'
                                className={classes.navLink}
                                // onClick={e => e.preventDefault()}
                                color='transparent'>
                                    Portfolio
                            </Button>
                        </ListItem>

                        <ListItem className={classes.listItem}>
                            <Button
                                href='contact'
                                className={classes.navLink}
                                // onClick={e => e.preventDefault()}
                                color='transparent'>
                                    Contact
                            </Button>
                        </ListItem>
                    </List>
                }
            >
                
                
            </Header>
        </div>
    )
}