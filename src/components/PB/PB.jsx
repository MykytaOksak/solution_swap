import React from 'react'
import CreatePost from './../CreatePost/CreatePost'
import PostCard from '../PostCard/PostCard'
/*
import TASKS from './../shared/tasks'
*/

const TASKS = [
    {
        id: 1,
        type: 'PB',
        title: 'activeClassName attribute refuses to work',
        description: 'The attribute has no impact on how the NavLink looks'
    },
    {
        id: 2,
        type: 'MathStat',
        title: 'Calculation of ...',
        description: 'Help me to calculate the probability of ...'
    },
    {
        id: 3,
        type: 'MathLog',
        title: 'Mathematical judgments',
        description: 'Help to proof my mathematical judgments ...'
    }
]

const PB = () => {

/*    var marvelHeroes =  heroes.filter(function(hero) {
        return hero.franchise == “Marvel”;
    });*/
    /*let PBTasks = TASKS.map(task => {
        if(task.type == 'PB')
            return task
            /!*task.type.toLowerCase().includes('pb')*!/
    })*/
    let PBTasks = TASKS.filter(task => task.type=='PB')

    return (
        <div>
            <CreatePost/>
            <PostCard task={PBTasks}/>
        </div>
    )
}

export default PB