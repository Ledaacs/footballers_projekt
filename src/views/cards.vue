<template>
  <div class="container">
    <h1 class="table-title led-text">Labdarúgók</h1>
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Keresés név vagy poszt alapján"
        class="search-input"
      />
    </div>
    <div class="row">
      <PlayerCard
        v-for="player in filteredPlayers"
        :key="player.id"
        :player="player"
        @click="showDetails(player)"
        class="player-card"
      />

      <div class="player-card"></div>
    </div>

    <div v-if="selectedPlayer" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>

        <div class="modal-row">
          <PlayerCard :player="selectedPlayer" class="modal-player-card" />

          <div class="additional-info">
            <img
              :src="`/public/${selectedPlayer.position
                .slice(0, 3)
                .toLowerCase()}.png`"
              alt="Sample Image"
              class="modal-image"
            />
            <p class="info-text">{{ selectedPlayer.description }}</p>
            <p class="info-text quotes">{{ selectedPlayer.quotes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from "@/components/PlayerCard.vue";

export default {
  components: {
    PlayerCard,
  },
  data() {
    return {
      searchQuery: "",
      players: [
        {
          id: 1,
          name: "Cristiano Ronaldo ♕",
          team: "Al-Nassr",
          age: 39,
          position: "Striker",
          image: "/public/ronca.png",
          description:
            "Full name: Cristiano Ronaldo dos Santos Aveiro Date of birth/Age: Feb 5, 1985 (39) Place of birth: Funchal  Portugal Height: 1,88 m Citizenship: Portugal Position: Attack - Centre-Forward Foot: right Player agent: Gestifute Current club: FC Al-Nassr FC Joined: Jan 1, 2023 Contract expires: Jun 30, 2025 Outfitter: Nike",
          quotes:
            "„Dreams are not what you see in your sleep, dreams are things which do not let you sleep.”",
        },
        {
          id: 2,
          name: "Neymar Jr",
          team: "Al-Hilah",
          age: 32,
          position: "Winger",
          image: "/public/ney.png",
          description:
            "Full name: Neymar da Silva Santos Júnior Date of birth/Age: Feb 5, 1992 (32) Place of birth: Mogi das Cruzes  Brazil Height: 1,75 m Citizenship: Brazil  Brazil Position: Attack - Left Winger Foot: right Player agent: Relatives Current club: Al-Hilal SFC Al-Hilal SFC Joined: Aug 15, 2023 Contract expires: Jun 30, 2025 Contract option: Option for a further year Outfitter: Puma",
          quotes: "„I never run away from the responsibility.”",
        },
        {
          id: 3,
          name: "James Rodríguez",
          team: "Rayo Vallecano",
          age: 32,
          position: "Midfielder",
          image: "/public/james.png",
          description:
            "Name in home country: James David Rodríguez Rubio Date of birth/Age: Jul 12, 1991 (33) Place of birth: Cúcuta  Colombia Height: 1,80 m Citizenship: Colombia  Colombia Spain  Spain Position: Midfield - Attacking Midfield Foot: left Player agent: Gestifute verified Current club: Rayo Vallecano Rayo Vallecano Joined: Aug 26, 2024 Contract expires: Jun 30, 2025 Outfitter: adidas",
          quotes: "„Football is my job, but it's also my passion.”",
        },
        {
          id: 4,
          name: "Jude Bellingham ",
          team: "Real Madrid",
          age: 20,
          position: "Midfielder",
          image: "/public/gol.png",
          description:
            "Name in home country: Jude Victor William Bellingham Date of birth/Age: Jun 29, 2003 (21) Place of birth: Stourbridge  England Height: 1,86 m Citizenship: England  England Ireland  Ireland Position: Midfield - Attacking Midfield Foot: right Current club: Real Madrid Real Madrid Joined: Jul 1, 2023 Contract expires: Jun 30, 2029 Outfitter: adidas",
          quotes: "„I'm just only 20 mate”",
        },
        {
          id: 5,
          name: "Kylian Mbappé",
          team: "Real Madrid",
          age: 25,
          position: "Striker",
          image: "/public/mbappe.png",
          description:
            "Name in home country: Kylian Mbappé Lottin Date of birth/Age: Dec 20, 1998 (25) Place of birth: Paris  France Height: 1,78 m Citizenship: France  France Cameroon  Cameroon Position: Attack - Centre-Forward Foot: right Player agent: Relatives Current club: Real Madrid Real Madrid Joined: Jul 1, 2024 Contract expires: Jun 30, 2029 Outfitter: Nike",
          quotes:
            "„Like the greats, you want to make your own story yourself, and not be a copy of another.”",
        },
        {
          id: 6,
          name: "Vini Jr",
          team: "Real Madrid",
          age: 25,
          position: "Winger",
          image: "/public/vini.png",
          description:
            "Full name: Vinicius José Paixão de Oliveira Junior Date of birth/Age: Jul 12, 2000 (24) Place of birth: São Gonçalo  Brazil Height: 1,76 m Citizenship: Brazil  Brazil Spain  Spain Position: Attack - Left Winger Foot: right Player agent: Roc Nation Sports verified Current club: Real Madrid Real Madrid Joined: Jul 12, 2018 Contract expires: Jun 30, 2027 Last contract extension: Oct 31, 2023 Outfitter: Nike",
          quotes: "„A dream without hard work is just a wish.”",
        },
        {
          id: 7,
          name: "Rodrygo Goes",
          team: "Real Madrid",
          age: 23,
          position: "Winger",
          image: "/public/rod.png",
          description:
            "Full name: Rodrygo Silva de Goes Date of birth/Age: Jan 9, 2001 (23) Place of birth: Osasco  Brazil Height: 1,74 m Citizenship: Brazil  Brazil Spain  Spain Position: Attack - Right Winger Foot: right Player agent: Un1que Football Current club: Real Madrid Real Madrid Joined: Jul 1, 2019 Contract expires: Jun 30, 2028 Last contract extension: Nov 2, 2023 Outfitter: Nike",
          quotes: "„I hope to bring a lot of happiness, Hala Madrid!”",
        },
        {
          id: 8,
          name: "Federico Valverde",
          team: "Real Madrid",
          age: 26,
          position: "Midfielder",
          image: "/public/fede.png",
          description:
            "Name in home country: Federico Santiago Valverde Dipetta Date of birth/Age: Jul 22, 1998 (26) Place of birth: Montevideo  Uruguay Height: 1,82 m Citizenship: Uruguay  Uruguay Spain  Spain Position: Midfield - Central Midfield Foot: right Player agent: Wasserman verified Current club: Real Madrid Real Madrid Joined: Jul 1, 2018 Contract expires: Jun 30, 2029 Last contract extension: Nov 9, 2023 Outfitter: Nike",
          quotes:
            "„I’m a fighter who sacrifices himself for the good of the team and the fans notice it”",
        },
        {
          id: 9,
          name: "Antoine Griezmann ",
          team: "Atletico Madrid",
          age: 33,
          position: "Striker",
          image: "/public/grizi.png",
          description:
            "Name in home country: Antoine Griezmann Date of birth/Age: Mar 21, 1991 (33) Place of birth: Mâcon  France Height: 1,76 m Citizenship: France  France Position: Attack - Centre-Forward Foot: left Player agent: BY AND FOR verified Current club: Atlético de Madrid Atlético de Madrid Joined: Jul 1, 2023 Contract expires: Jun 30, 2026 Outfitter: Puma",
          quotes: "„With hard work and effort, you can achieve anything.”",
        },
        {
          id: 10,
          name: "Sergio Ramos",
          team: "Real Madrid",
          age: 36,
          position: "Defender",
          image: "/public/ramos.png",
          description:
            "Name in home country: Sergio Ramos García Date of birth/Age: Mar 30, 1986 (38) Place of birth: Camas  Spain Height: 1,84 m Citizenship: Spain  Spain Position: Defender - Centre-Back Foot: right Player agent: RR-Soccer ... verified Current club: Without Club Without Club Joined: Jul 1, 2024 Contract expires: - Outfitter: Mizuno ",
          quotes: "„You have to learn from bad moments.”",
        },
        {
          id: 11,
          name: "Lamine Yamal",
          team: "Barcelona",
          age: 18,
          position: "Winger",
          image: "/public/lamin.png",
          description:
            "Full name: Lamine Yamal Nasraoui Ebana Date of birth/Age: Jul 13, 2007 (17) Place of birth: Esplugues de Llobregat  Spain Height: 1,80 m Citizenship: Spain  Spain Equatorial Guinea  Equatorial Guinea Position: Attack - Right Winger Foot: left Player agent: Agent is known - Player under 18 Current club: FC Barcelona FC Barcelona Joined: Jul 1, 2023 Contract expires: Jun 30, 2026 Last contract extension: Oct 2, 2023 Outfitter: adidas",
          quotes:
            "„Move in silence only speak when it's time to say checkmate.”",
        },
      ],
      selectedPlayer: null,
    };
  },
  computed: {
    filteredPlayers() {
      return this.players.filter((player) => {
        const nameMatch = player.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const positionMatch = player.position
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        return nameMatch || positionMatch;
      });
    },
  },
  methods: {
    showDetails(player) {
      this.selectedPlayer = player;
    },
    closeModal() {
      this.selectedPlayer = null;
    },
  },
};
</script>

<style scoped>
.container {
  font-family: "Oswald", sans-serif;
  width: 100%;
  padding: 20px;
}

.table-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

.search-container {
  text-align: center;
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  font-family: "Oswald", sans-serif;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-width: 900px;
  width: 90%;
}

.modal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.modal-image {
  width: 250px;
  height: auto;
  border-radius: 10px;
}

.additional-info {
  font-family: "Oswald", sans-serif;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-text {
  font-family: "Oswald", sans-serif;
  margin-top: 15px;
  color: white;
  font-size: 18px;
  text-align: left;
  max-width: 500px;
}

.quotes {
  font-style: italic;
  color: #ccc;
}

.close {
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 50px;
  cursor: pointer;
  color: #06837f;
}

.close:hover {
  color: #333;
}
</style>
