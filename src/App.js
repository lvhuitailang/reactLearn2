import React, {Component,fragment} from 'react';

import {
    Like,
    ToDoHeader,
    ToDoInput,
    ToDoList
} from './componets'

import {getTodos} from "./services";

class App extends Component {
    constructor() {
        super();
        this.state={
            desc:'今日事，今日毕',
            title:'待办事项列表',
            btnText:'ADD',
            toDoList:[],
            isLoading:false
            /*toDoList:[
                {
                    id:+new Date()+Math.random(),
                    title:'吃饭',
                    completed:true
                },
                {
                    id:+new Date()+Math.random(),
                    title:'睡觉',
                    completed:false
                },
                {
                    id:+new Date()+Math.random(),
                    title:'打豆',
                    completed:false
                }
            ],*/
        }
    }

    componentDidMount() {
        this.setState({
            isLoading:true
        });
        setTimeout(()=>{
            this.getDatas();
        },5000);

    }

    getDatas = ()=>{
        getTodos().then(response=>{
            if(response.status === 200 && response.data){
                this.setState(()=>{
                    return {
                        toDoList:response.data
                    }
                })
            }
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            this.setState({
                isLoading:false
            });
        });
    }

    //添加代办事项
    addToDo = (title)=>{
        this.setState(()=>{
            return{
                toDoList:this.state.toDoList.concat({id:+new Date()+Math.random(),title:title,completed:false})
            }
        })

    }
    //更改代办状态
    completeChange = (id)=>{
        this.setState((preState)=>{
            //这种遍历方法只要匹配到了就不会再继续遍历了，比下面的map效率高
            let matched = preState.toDoList.some((v,i)=>{
                if(id === v.id){
                    v.completed = !v.completed;
                    return true;
                }
            });
            if(matched){
                return {
                    toDoList:preState.toDoList
                }
            }
        });

        //下面这种遍历方法会遍历所有的list
/*        this.setState((preState)=>{
            return {
                toDoList:preState.toDoList.map((v)=>{
                    if(v.id === id){
                        v.completed = !v.completed;

                    }
                    console.log(1)
                    return v;
                })
            }


        });*/




    }


    render() {
        return (
            <div>
                <ToDoHeader desc={this.state.desc}>{{title:this.state.title}}</ToDoHeader>
                <ToDoInput addToDo={this.addToDo}>{{btnText:this.state.btnText}}</ToDoInput>
                {this.state.isLoading?(<div>Loading...</div>):(<ToDoList
                    toDoList={this.state.toDoList}
                    completeChange = {this.completeChange}
                />)}

                <Like/>
            </div>

        );
    }
}

export default App;