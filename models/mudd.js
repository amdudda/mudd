var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var monsterSchema = new Schema({
    name : String,
    hit_points : Number,
    weakness : String,
    attack : String,
    attack_bonus : Number,
    damage_die : Number,
    damage_bonus : Number,
    attack_type : String,
    defense : Number,
    follow_chance : Number,
    experience_points : Number
});


var MonsterDB = mongoose.model('MonsterDB', monsterSchema);

module.exports = mongoose.model('MonsterDB', monsterSchema);
//module.exports = Monster;