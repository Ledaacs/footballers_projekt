<template>
  <div class="row">
    <div class="footballers-table col-5">
      <h1>FOOTBALLERS</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Age</th>
            <th>Position</th>
            <th style="width: 5px">Shirt Number</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(footballer, index) in footballers"
            :key="index"
            @click="selectFootballer(footballer)"
          >
            <td>{{ footballer.name }}</td>
            <td>{{ footballer.team }}</td>
            <td>{{ footballer.age }}</td>
            <td>{{ footballer.position }}</td>
            <td>{{ footballer.shirtNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="club-visualization col-7">
      <div v-if="selectedFootballer">
        <h2>{{ selectedFootballer.name }}</h2>
        <img
          :src="selectedFootballer.image"
          alt="Footballer Image"
          class="player-image"
        />
      </div>
    </div>
  </div>
</template>


  
<script>
export default {
  components: {},
  data() {
    return {
      footballers: [
        {
          id: 1,
          name: "Cristiano Ronaldo ♕",
          team: "Al-Nassr",
          age: 39,
          position: "Striker",
          image: "/public/ronca.png",
          shirtNumber: 7,
        },
        {
          id: 2,
          name: "Neymar Jr",
          team: "Al-Hilah",
          age: 32,
          position: "Winger",
          image: "/public/ney.png",
          shirtNumber: 10,
        },
        {
          id: 3,
          name: "James Roudriguez",
          team: "Rayo Vallecano",
          age: 32,
          position: "Midfielder",
          image: "/public/james.png",
          shirtNumber: 10,
        },
        {
          id: 4,
          name: "Bellingham Jude",
          team: "Real Madrid",
          age: 20,
          position: "Midfielder",
          image: "/public/gol.png",
          shirtNumber: 5,
        },
        {
          id: 5,
          name: "Kylian Mbappe",
          team: "Real Madrid",
          age: 25,
          position: "Striker",
          image: "/public/mbappe.png",
          shirtNumber: 9,
        },
        {
          id: 6,
          name: "Vini Jr",
          team: "Real Madrid",
          age: 25,
          position: "Winger",
          image: "/public/vini.png",
          shirtNumber: 7,
        },
        {
          id: 7,
          name: "Rodrygo Goes",
          team: "Real Madrid",
          age: 23,
          position: "Winger",
          image: "/public/rod.png",
          shirtNumber: 11,
        },
        {
          id: 8,
          name: "Federico Valverde",
          team: "Real Madrid",
          age: 26,
          position: "Midfielder",
          image: "/public/fede.png",
          shirtNumber: 8,
        },
        {
          id: 9,
          name: "Antoine Griezmann ",
          team: "Atletico Madrid",
          age: 33,
          position: "Striker",
          image: "/public/grizi.png",
          shirtNumber: 7,
        },
        {
          id: 10,
          name: "Rüdiger",
          team: "Real Madrid",
          age: 33,
          position: "Defender",
          image: "/public/rudi.png",
          shirtNumber: 3,
        },
        {
          id: 11,
          name: "Lamine Yamal",
          team: "Barcelona",
          age: 18,
          position: "Winger",
          image: "/public/lamin.png",
          shirtNumber: 19,
        },
      ],
      selectedFootballer: null,
    };
  },
  methods: {
    selectFootballer(footballer) {
      this.selectedFootballer = footballer;
    },
  },
};
</script>
  
<style scoped>
.content {
  font-family: "Oswald", sans-serif;
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  overflow-y: auto;
  height: calc(100vh); 
}

tbody tr:hover {
  background: #06837f !important;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.footballers-table {
  width: 45%;
}

th,
td {
  padding: 10px;
  border: none;
  text-align: center;
  vertical-align: middle;
  color: white;
}

table {
  font-family: "Oswald", sans-serif;
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th {
  background-color: rgba(22, 22, 22, 0.2);
}

.club-visualization {
  width: 50%;
  border: 1px solid rgba(22, 22, 22, 0.2);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

h1 {
  font-family: "Oswald", sans-serif;
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

h1:hover {
  transform: scale(1.02);
}

th {
  color: #06837f;
}

.player-image {
  width: 50%;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;
  border: solid 10px;
  border-color: #06837f;
  box-shadow: 0 0 10px rgba(6, 131, 127, 0.5), 0 0 20px rgba(6, 131, 127, 0.3),
    0 0 30px rgba(6, 131, 127, 0.2);
  transition: box-shadow 0.3s ease;
}

.player-image:hover {
  box-shadow: 0 0 20px rgba(6, 131, 127, 0.7), 0 0 40px rgba(6, 131, 127, 0.5),
    0 0 60px rgba(6, 131, 127, 0.4);
}

tr {
  cursor: pointer;
  transition: transform 0.2s;
}

tbody tr:hover {
  transform: scale(1.02);
}
</style>

