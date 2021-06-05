import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";
import { withRouter } from "react-router";

const LinkButton = (props) => {
    const { history, staticContext, to, onClick, ...rest } = props;
    return (
        <Button style = {{marginTop : 8 }}
            {...rest}
            onClick={(event) => {
                onClick && onClick(event);
                history.push(to);
            }}
        />
    );
};

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
