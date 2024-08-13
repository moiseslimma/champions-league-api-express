import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
   {
      id: 1, 
      name: "Marco Asensio",
      club: "Paris Saint-Germain",
      nationality: "Espanha",
      position: "Midfielder",
      statistics: {
         Overall: 84,
         Pace: 82,
         Shooting: 85,
         Passing: 83,
         Dribbling: 83,
         Defending: 38,
         Physical: 65
      },
   },
   {
      id: 2, 
      name: "Gabriel Jesus",
      club: "Arsenal",
      nationality: "Brasil",
      position: "Forward",
      statistics: {
         Overall: 87,
         Pace: 87,
         Shooting: 86,
         Passing: 82,
         Dribbling: 86,
         Defending: 35,
         Physical: 68
      },
   },
   {
      id: 3, 
      name: "Robert Lewandowski",
      club: "Barcelona",
      nationality: "Poland",
      position: "Forward",
      statistics: {
         Overall: 91,
         Pace: 80,
         Shooting: 92,
         Passing: 78,
         Dribbling: 83,
         Defending: 40,
         Physical: 84
      },
   },
   {
      id: 4, 
      name: "Raheem Sterling",
      club: "Chelsea",
      nationality: "England",
      position: "Forward",
      statistics: {
         Overall: 87,
         Pace: 93,
         Shooting: 92,
         Passing: 79,
         Dribbling: 90,
         Defending: 40,
         Physical: 77
      },
   },
   {
      id: 5, 
      name: "David Beckham",
      club: "Retired",
      nationality: "England",
      position: "Midfielder",
      statistics: {
         Overall: 85,
         Pace: 76,
         Shooting: 82,
         Passing: 90,
         Dribbling: 84,
         Defending: 70,
         Physical: 72
      },
   },  
   {
      id: 6, 
      name: "Erling Haaland",
      club: "Manchester City",
      nationality: "Norway",
      position: "Forward",
      statistics: {
         Overall: 89,
         Pace: 88,
         Shooting: 90,
         Passing: 75,
         Dribbling: 81,
         Defending: 32,
         Physical: 89
      },
   },  
   {
      id: 7, 
      name: "Luis Diaz",
      club: "Liverpool",
      nationality: "Uruguai",
      position: "Forward",
      statistics: {
         Overall: 89,
         Pace: 88,
         Shooting: 87,
         Passing: 79,
         Dribbling: 88,
         Defending: 32,
         Physical: 65
      },
   },  
   {
      id: 8, 
      name: "Hidemasa Morita",
      club: "Benfica",
      nationality: "Japão",
      position: "Forward",
      statistics: {
         Overall: 84,
         Pace: 86,
         Shooting: 81,
         Passing: 80,
         Dribbling: 83,
         Defending: 32,
         Physical: 65
      },
   },  
   {
      id: 9, 
      name: "Antoine Griezmann",
      club: "Atlético de Madrid",
      nationality: "França",
      position: "Forward",
      statistics: {
         Overall: 87,
         Pace: 85,
         Shooting: 88,
         Passing: 81,
         Dribbling: 83,
         Defending: 32,
         Physical: 69
      },
   },  
   {
      id: 10, 
      name: "Harry Kane",
      club: "Bayern de Munique",
      nationality: "Inglaterra",
      position: "Forward",
      statistics: {
         Overall: 90,
         Pace: 86,
         Shooting: 91,
         Passing: 83,
         Dribbling: 81,
         Defending: 39,
         Physical: 85
      },
   },  
]

export const findAllPLayers = async (): Promise<PlayerModel[]> => {
   return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
   return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
   database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
   const index = database.findIndex(p => p.id === id);

   if(index !== -1) {
      database.splice(index, 1);
      return true;
   } 
   
   return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
   const playerIndex = database.findIndex(player => player.id === id);

   if(playerIndex !== -1) {
      database[playerIndex].statistics = statistics;
   }
   return database[playerIndex];
}