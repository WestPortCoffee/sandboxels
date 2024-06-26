//jaydsfunctions
erase1Var = 0;
elements.selective_eraser = {
    color: ["#ffff00","#ffff00","#ffff00","#555555","#555555","#555555"],
    category: "tools",
    tool: function(pixel) {
        if (pixel.element === erase1Var) {
            deletePixel(pixel.x, pixel.y);
        }
    },
        onSelect: function() {
        var answer1 = prompt("Please input what element should be erased.",(erase1Var||undefined));
        if (!answer1) { return }
		erase1Var = answer1;
    }
},
explode1Var = 0;
elements.selective_exploder = {
    color: ["#ff0000","#ff0000","#ff0000","#555555","#555555","#555555"],
    category: "tools",
    tool: function(pixel) {
        if (pixel.element === explode1Var) {
			changePixel(pixel, "explosion")
        }
    },
        onSelect: function() {
        var answer2 = prompt("Please input what element to explode.",(explode1Var||undefined));
        if (!answer2) { return }
		explode1Var = answer2;
    }
},
convert11Var = 0;
convert22Var = 0;
elements.converter_tool = {
    color: ["#ffffff","#ffffff","#ffffff","#555555","#555555","#555555"],
    darkText: true,
    category: "tools",
    tool: function(pixel) {
        if (pixel.element === convert11Var) {
			changePixel(pixel, convert22Var)
        }
    },
        onSelect: function() {
        var answer3 = prompt("Please input what should element be converted.",(convert11Var||undefined));
        if (!answer3) { return }
		convert11Var = answer3;
        var answer4 = prompt("Please input what element to convert into.",(convert22Var||undefined));
        if (!answer4) { return }
		convert22Var = answer4;
    }
},
elements.fast_bomb = {
    color: "#524c41",
    category: "weapons",
    state: "solid",
    behavior: [
        "XX|EX:10>explosion|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:10>explosion|M2",
        ],
    tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x, pixel.y+1)) {
                if (!isEmpty(pixel.x, pixel.y+1,true)) {
                    var newPixel = pixelMap[pixel.x][pixel.y+1];
                    if (newPixel.element === "fast_bomb") { break; }
                    }
                }
            }
        },
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
exclude1Var = 0;
elements.exclusive_eraser = {
    color: ["#ff5a00","#ff5a00","#ff5a00","#555555","#555555","#555555"],
    category: "tools",
    tool: function(pixel) {
        if (pixel.element !== exclude1Var) {
            deletePixel(pixel.x, pixel.y);
        }
    },
        onSelect: function() {
        var answer5 = prompt("Please input what element shouldn't be erased.",(exclude1Var||undefined));
        if (!answer5) { return }
		exclude1Var = answer5;
    }
},
elements.tenth_heater = {
    category: "special",
    color: "#ff0000",
    behavior: [
        "XX|HT:0.1|XX",
        "HT:0.1|XX|HT:0.1",
        "XX|HT:0.1|XX",
        ],
    ignore: "tenth_heater"
},
elements.e_tenth_heater = {
    category: "special",
    color: "#ff0000",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|HT:0.1|XX",
        "HT:0.1|XX|HT:0.1",
        "XX|HT:0.1|XX",
        ],
    ignore: "tenth_heater",
    conduct: 1
}