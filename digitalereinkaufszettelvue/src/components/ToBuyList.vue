<template>
  <div>
   <input type="text" class= "tobuy-input" placeholder="Name des Artikels" v-model="newToBuy" @keyup.enter="addToBuy">
   <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
  <div v-for="(tobuy,index) in tobuysFiltered" :key="tobuy.id" class="tobuy-item">
      <div class="tobuy-item-left">
          <input type="checkbox" v-model="tobuy.completed">
      </div>
      <div class="tobuy-item-label" :class="{ completed : tobuy.completed}">
          
        {{tobuy.article}}
      </div>
    <div class="remove-item" @click="removeToBuy(index)">
        &times;
    </div>
  </div>
  </transition-group>

   <div class="extra-container">
      <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTobuys"> Check All</label></div>
      <div>{{ remaining }} items left</div>
    </div>
    <div class="extra-container">
      <div>
        <button :class="{ active: filter == 'all' }" @click="filter = 'all'">All</button>
        <button :class="{ active: filter == 'Kaufen' }" @click="filter = 'Kaufen'">Kaufen</button>
        <button :class="{ active: filter == 'Gekauft' }" @click="filter = 'Gekauft'">Gekauft</button>
      </div>

      <div>
        <transition name="fade">
        <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
        </transition>
      </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'tobuy-list',
 data() {
     return{
    newToBuy: '',
    idForToBuy: 3,
    filter: 'all',
    tobuys: [
        {
            'articleId': 1,
            'article': '500g iwas',
            'status': false
        },
        {
            'articleId': 2,
            'article': '200g iwas',
            'status': false
        }
    ]
     
  }
  
 },
  methods: {
      addToBuy() {
          if(this.newToBuy.trim().length == 0){
              return
          }
          this.tobuys.push({
              articleId: this.idForToBuy,
              article: this.newToBuy,
              status: false,
          })
          this.newToBuy = ''
          this.idForToBuy++
      },
      removeToBuy(index){
      this.tobuys.splice(index,1);
      },
      checkAllTobuys() {
      this.tobuys.forEach((tobuy) => tobuy.completed = event.target.checked)
    },
      clearCompleted() {
      this.tobuys = this.tobuys.filter(tobuy => !tobuy.completed)
    }
  },
  computed:{
     remaining() {
      return this.tobuys.filter(tobuy => !tobuy.completed).length
    },
     anyRemaining() {
      return this.remaining != 0
    },
     tobuysFiltered() {
      if (this.filter == 'all') {
        return this.tobuys
      }
      else if (this.filter == 'Kaufen') {
        return this.tobuys.filter(tobuy => !tobuy.completed)
      }
      else if (this.filter == 'Gekauft') {
        return this.tobuys.filter(tobuy => tobuy.completed)
      }
      return this.tobuys
    },
     showClearCompletedButton() {
      return this.tobuys.filter(tobuy => tobuy.completed).length > 0
    },

  }

}
</script>


<style lang= "scss">
 @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
 .tobuy-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
    
    &:focus {
      outline: 0;
    }
  }
  .tobuy-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
  }
   .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
      color: black;
    }
  }
  .tobuy-item-left { // later
    display: flex;
    align-items: left;
  }
  .tobuy-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 0px;
    
  }
  .completed {
    text-decoration: line-through;
    color: grey;
  }
  .extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
  }

  button {
    font-size: 14px;
    background-color: white;
    appearance: none;
    margin-left: 5px;
    &:hover {
      background: lightgreen;
    }
    &:focus {
      outline: none;
    }
  }
  .active {
    background: lightgreen;
  }

  // CSS Transitions
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
