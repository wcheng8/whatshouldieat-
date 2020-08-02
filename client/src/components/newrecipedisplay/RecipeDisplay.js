import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import renderHTML from "react-render-html";
import Truncate from "react-truncate";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

const RecipeDisplay = ({ title, summary, image }) => {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt={title}
						height="140"
						image={image}
						title={title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							<Truncate
								lines={3}
								ellipsis={
									<span>
										... <a href="/link/to/article">Read more</a>
									</span>
								}
							>
								{renderHTML(summary)}
							</Truncate>
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						See More ...
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default RecipeDisplay;
