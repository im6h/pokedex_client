import React, { useState } from 'react'
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
})
const Navbar: React.FC = () => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const data: string[] = ['Pokemon', 'Move', 'Type']
	const actionDrawer = () => {
		setOpen(true)
	}
	return (
		<div>
			<AppBar position="relative" color="transparent">
				<Toolbar>
					<IconButton
						onClick={() => {
							actionDrawer()
						}}
						edge="start"
						color="primary"
						aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="primary">
						Pokemon
					</Typography>
					<Drawer
						anchor="left"
						open={open}
						onClose={() => {
							setOpen(false)
						}}>
						<div className={classes.list}>
							<List>
								{data.map((e: string) => (
									<ListItem button key={e}>
										<Link
											to={`/${e.toLowerCase()}`}
											style={{
												textDecoration: 'none',
												color: 'black',
											}}>
											<ListItemText primary={e} />
										</Link>
									</ListItem>
								))}
							</List>
						</div>
					</Drawer>
				</Toolbar>
			</AppBar>
		</div>
	)
}
export default Navbar
