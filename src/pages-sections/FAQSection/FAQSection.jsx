import React from 'react'
import Collapse from "rc-collapse";
import styles from "src/assets/jss/nextjs-material-kit/components/FAQCard"
import {makeStyles} from "@material-ui/core/styles";

const Panel = Collapse.Panel
const useClasses = makeStyles(styles)

export const FAQSection = (props) => {

    const classes = useClasses()
    return (
        <div>
            <h2 className={classes.title}>{props.title}</h2>
            <h4 className={classes.subtitle}>{props.subtitle}</h4>
            <Collapse accordion={false}>
                {props.entries.map(
                    ({title, description}) =>
                        <Panel
                            header={title}
                            headerClass={classes.title}
                            className={classes.description}>
                            {description}
                        </Panel>)}
            </Collapse>

        </div>
    )
}
