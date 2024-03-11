<template>
    <main class="calendar-contain">

        <section class="title-bar">

            <span class="title-bar__year">
                <i class="fas fa-caret-left"></i>
                <span style="margin: 10px;">March</span>
                <i class="fas fa-caret-right"></i>
            </span>
            <span class="title-bar__month">
                Month
            </span>


        </section>

        <aside class="calendar__sidebar">

            <h2 class="sidebar__heading">Wednesday<br>April 6</h2>
            <ul class="sidebar__list">
                <li class="sidebar__list-item sidebar__list-item--complete"><span class="list-item__time">8.30</span> Team
                    Meeting</li>
                <li class="sidebar__list-item sidebar__list-item--complete"><span class="list-item__time">10.00</span> Lunch
                    with Sasha</li>
                <li class="sidebar__list-item"><span class="list-item__time">2.30</span> Design Review</li>
                <li class="sidebar__list-item"><span class="list-item__time">4.00</span> Get Groceries</li>
            </ul>
        </aside>


        <section class="calendar__days">
            <section class="calendar__top-bar">
                <span class="top-bar__days">Mon</span>
                <span class="top-bar__days">Tue</span>
                <span class="top-bar__days">Wed</span>
                <span class="top-bar__days">Thu</span>
                <span class="top-bar__days">Fri</span>
                <span class="top-bar__days">Sat</span>
                <span class="top-bar__days">Sun</span>
            </section>

            <section class="calendar__week">
                <div class="calendar__day inactive">
                    <span class="calendar__date">30</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day inactive">
                    <span class="calendar__date">31</span>
                    <span class="calendar__task">4</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">1</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">2</span>
                    <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">3</span>
                    <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">4</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">5</span>
                    <span class="calendar__task">4</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                    <span class="calendar__date">6</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">7</span>
                    <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">8</span>
                    <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">9</span>
                    <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">10</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">11</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">12</span>
                    <span class="calendar__task">1</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                    <span class="calendar__date">13</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">14</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day today">
                    <span class="calendar__date">15</span>
                    <span class="calendar__task calendar__task--today">4 items</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">16</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">17</span>
                    <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">18</span>
                    <span class="calendar__task">4</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">19</span>
                    <span class="calendar__task">2</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                    <span class="calendar__date">20</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">21</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">22</span>
                    <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">23</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">24</span>
                    <span class="calendar__task">5</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">25</span>
                    <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">26</span>
                    <span class="calendar__task">1</span>
                </div>
            </section>

            <section class="calendar__week">
                <div class="calendar__day">
                    <span class="calendar__date">27</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day">
                    <span class="calendar__date">28</span>
                    <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day inactive">
                    <span class="calendar__date">1</span>
                    <span class="calendar__task">2</span>
                </div>
                <div class="calendar__day inactive">
                    <span class="calendar__date">2</span>
                    <span class="calendar__task">1</span>
                </div>
                <div class="calendar__day inactive">
                    <span class="calendar__date">3</span>
                    <span class="calendar__task">5</span>
                </div>
                <div class="calendar__day inactive">
                    <span class="calendar__date">4</span>
                    <span class="calendar__task">3</span>
                </div>
                <div class="calendar__day inactive">
                    <span class="calendar__date">5</span>
                    <span class="calendar__task">1</span>
                </div>
            </section>
        </section>
        <div class="todotasklist-container">
        <div class="app-container" id="taskList">
            <h1 class="app-header">TO DO LIST</h1>
            <div class="add-task">
                <input type="text" autocomplete="off" placeholder="Add New Task" v-model="tasks.name" @keyup.enter="newItem"
                    class="task-input" />
                <button class="add-new-task" @click="newItem">Add</button>
                <!-- <input type="submit" value="" class="submit-task" @click="newItem" title="Add Task" /> -->
            </div>
            <ul class="task-list">
                <li v-for="task in tasks" :key="task.name" class="task-list-item">
                    <div class="task-list-item-label">
                        <input type="checkbox" />
                        <span class="task-name">{{ task.name }}</span>
                    </div>
                    <span @click="delItem(task)" class="delete-btn" title="Delete Task">❌</span>
                </li>
            </ul>
        </div>
    </div>

    </main>
</template>
<script setup>
import { ref } from 'vue';

const tasks = ref([
    { name: 'Start a new pen' },
    { name: 'Read a book' },
    { name: 'Meeting with team' },
]);

function newItem() {
    if (!tasks.value.name) return;
    tasks.value.push({ name: tasks.value.name, del: '' });
    tasks.value.name = '';
}

function delItem(task) {
    const taskIndex = tasks.value.indexOf(task);
    if (taskIndex !== -1) {
        tasks.value.splice(taskIndex, 1);
    }
}
</script>
<style scoped>
@import "../style/calendar.css";
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");

* {
    box-sizing: border-box;
}
.todotasklist-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    z-index: 5;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
}

input {
    outline: none;
}

ul {
    list-style: none;
    padding: 0;
}
.add-new-task {
    background-color: rgb(61, 183, 236);
    border: none;
    border-radius: 5px;
}
.app-container {
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
    background-color: rgb(219 240 249);
    padding: 24px;
    overflow: auto;
    margin: 30px;
}

.app-header {
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 12px 0;
    color: rgb(19, 170, 234);
    font-weight: 600;
}

.submit-task {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: none;
    background: var(--add-button);
    color: #fff;
   
    background-size: 18px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.add-task {
    height: 40px;
    font-size: 14px;
    display: flex;
}

.task-input {
    border-right: none;
    width: 100%;
    padding: 0 4px;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    margin-right: 12px;
    color: #fff;
    box-shadow: none;
    border-radius: 0;

    &:placeholder {
        color: #fff;
    }
}

.task-list-item {
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 12px;
    display: flex;
    padding: 8px;

    input {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid rgb(110 200 238);
        
        background-repeat: no-repeat;
        background-position: center;
        background-size: 0;
        transition: .2s;
        margin-right: 8px;
        flex-shrink: 0;
        margin-top: 4px;
        appearance: none;

        &:hover {
            border-color: var(--checkbox-color);
            box-shadow: 0 0 0 3px var(--checkbox-shadow);
        }

        &:checked {
            background-size: 10px;
            border: 1px solid var(--checkbox-color);
            background-color: rgb(110 200 238);

            +span {
                color: rgb(110 200 238);
                text-decoration: line-through rgb(110 200 238);
            }
        }
    }

    &-label {
        display: flex;
        align-items: flex-start;
        color: rgb(110 200 238);
        margin-right: 8px;
        font-size: 14px;
        line-height: 24px;
        position: relative;
        transition: .2s;
        cursor: pointer;
    }
}

.delete-btn {
    margin-left: auto;
    display: block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
   
    background-size: 16px;
    background-position: center;
    cursor: pointer;
}

@supports(-webkit-appearance: none) or (-moz-appearance: none) {

    input[type='checkbox'],
    input[type='radio'] {
        -webkit-appearance: none;
        -moz-appearance: none;
    }
}
</style>