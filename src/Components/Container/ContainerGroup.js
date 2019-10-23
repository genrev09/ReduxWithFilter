import { connect } from "react-redux";
import GroupContent from "../GroupContent/GroupContent";
import TodoResource from "../Resource/TodoResource";

const mapStateToProps = state => ({
    inputText: state.inputText,
    textList: state.textList,
    isChecked: state.isChecked,
    filterType: state.filterType
});

const mapDispatchToProps = dispatch => ({
    textChanged: (text) =>
    dispatch({
        type: "CHANGETEXT",
        payload: text
    }),
    
    filterTypeChanged: (filterType) =>
    dispatch({
        type: "CHANGE_FILTER_TYPE",
        payload: filterType
    }),

    addContent: (_content) =>{
        const newTodoItem = {
            content: _content,
            status: "active"
        };
        TodoResource.createTodo(newTodoItem)
        .then(res => res.json())
        .then(({id, status, content}) => {
        dispatch({
          type: 'ADDCONTENT',
          payload: {id, status, content}
        })
      })
    },

    checked: (todo) =>{
        const updatedToDo = {
            id: todo.id,
            content: todo.content,
            status: (todo.status === "active") ? "completed" : "active"
        };
        TodoResource.updateTodo(updatedToDo)
        .then(res => res.json())
        .then(({id, status, content}) => {
        dispatch({
            type: "CHECKBOXCHECKED",
            payload: {id, status, content}
        })
      })
    },

    refreshContent: (contentList) =>
    dispatch({
        type: "REFRESH",
        payload: contentList
    }),

    filterContent: (filterType) =>{
        const FinalFilterType = (filterType === "all") ? "active,completed" : filterType;
        TodoResource.filterTodo(FinalFilterType)
        .then(res => res.json())
        .then(res =>{
            dispatch({
                type: "REFRESH",
                payload: res._embedded.todos
            })
        })
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupContent)