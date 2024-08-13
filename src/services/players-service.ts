import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helper";
import * as httpResponse from './../utils/http-helper';


export const getPlayerService = async () => {
   const data =  await PlayerRepository.findAllPLayers();
   let response = null;

   if(data) {
      response = await ok(data);
   } else {
      response = await noContent();
   }
   return response;
}

export const getPlayerByIdService = async (id: number) => {
   const data = await PlayerRepository.findPlayerById(id);
   let response = null;

   if(data) {
      response = await httpResponse.ok(data);
   } else {
      response = await httpResponse.noContent();
   }
   return response;
}

export const createPlayerService = async (player: PlayerModel) => {
   let response = null;

   if(Object.keys(player).length !== 0) {
      await PlayerRepository.insertPlayer(player);
      response = await httpResponse.created();
   } else {
      console.log("bad request")
      response = await httpResponse.badRequest();
   }
   return response;
}

export const deletePlayerService = async (id: number) => {
   let response = null;

   const isDeleted = await PlayerRepository.deleteOnePlayer(id);
   if(isDeleted) {
      response = await httpResponse.ok({message: "deleted"});
   } else {
      response = await httpResponse.badRequest();
   }
   return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
   const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
   let response = null;

   if(Object.keys(data).length === 0) {
      response = httpResponse.badRequest();
   } else {
      response = httpResponse.ok(data);
   }
   return response;
}
