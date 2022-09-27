else if (["!fla"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 90, 0xEBEBEB, [0xC90000, 0x080808, 0xC90000]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Flamengo!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 90, 0xEBEBEB, [0xC90000, 0x080808, 0xC90000]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Flamengo!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!cor"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 90, 0xEBEBEB, [0x080808, 0x080808, 0x080808]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Corinthians!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 90, 0xEBEBEB, [0x080808, 0x080808, 0x080808]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Corinthians!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!pal"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 90, 0xE3E3E3, [0x213c34, 0x213c34, 0x213c34]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Palmeiras!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 90, 0xE3E3E3, [0x213c34, 0x213c34, 0x213c34]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Palmeiras!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!vas"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 40, 0xC90000, [0x080808, 0xFFFFFF, 0x080808]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Vasco!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 40, 0xC90000, [0x080808, 0xFFFFFF, 0x080808]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Vasco!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!bot"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 0, 0x292929, [0x080808, 0xFFFFFF, 0x080808]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Botafogo!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 0, 0x292929, [0x080808, 0xFFFFFF, 0x080808]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Botafogo!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!gre"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 0, 0x080808, [0x0884bd, 0xFFFFFF, 0x0884bd]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Grêmio!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 0, 0x080808, [0x0884bd, 0xFFFFFF, 0x0884bd]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Grêmio!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!inter"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 90, 0xFFFFFF, [0xC90000, 0xC90000, 0xC90000]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Internacional!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 90, 0xFFFFFF, [0xC90000, 0xC90000, 0xC90000]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Internacional!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!flu"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x860929, 0x01623c, 0x860929]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Fluminense!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x860929, 0x01623c, 0x860929]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Fluminense!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!cru"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x2f529e, 0x2f529e, 0x2f529e]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Cruzeiro!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x2f529e, 0x2f529e, 0x2f529e]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Cruzeiro!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!fort"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x1f5ea1, 0xe31d1a, 0x1f5ea1]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Fortaleza!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x1f5ea1, 0xe31d1a, 0x1f5ea1]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Fortaleza!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!bah"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x005ca9, 0xe31d1a, 0x005ca9]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Bahia!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x005ca9, 0xe31d1a, 0x005ca9]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Bahia!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!sport"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 90, 0xFFD900, [0xC90000, 0x080808, 0xC90000]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Sport!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 90, 0xFFD900, [0xC90000, 0x080808, 0xC90000]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Sport!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}

else if (["!san"].includes(message[0].toLowerCase()))  {
    if (player.team == 1 && teamR[0].id == player.id && teamR[0].id == player.id || player.admin){
        room.setTeamColors(1, 90, 0x080808, [0xEBEBEB, 0xEBEBEB, 0xEBEBEB]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Santos!", null, Cor.Azulclaro, Negrito);
    }
    else if (player.team == 2 && teamB[0].id == player.id && teamB[0].id == player.id || player.admin){
        room.setTeamColors(2, 90, 0x080808, [0xEBEBEB, 0xEBEBEB, 0xEBEBEB]);
        room.sendAnnouncement("@"+player.name + " escolheu o uniforme do Santos!", null,Cor.Azulclaro, Negrito);
    }
    return false;
}