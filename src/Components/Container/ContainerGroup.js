import { connect } from "react-redux";
import GroupContent from "../GroupContent/GroupContent";

const mapStateToProps = state => ({
    inputText: state.inputText,
    textList: state.textList,
    isChecked: state.isChecked
});

const mapDispatchToProps = dispatch => ({
    textChanged: (text) =>
        dispatch({
            type: "CHANGETEXT",
            payload: text
        }),
    addContent: (content) =>
        dispatch({
            type: "ADDCONTENT",
            payload: content
        }),
    checked: () =>
    dispatch({
        type: "CHECKBOXCHECKED",
    })
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupContent)