/////// методи об'єкта і this при оголошені до властивостей в методах /////

const playlist = {
    name: 'Мій супер трек',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
    ///// так було /////
    // getName: function () {
    //     console.log('this getName');
    // }
    ///// так стало //// 
    getName() {
        console.log('this getName');
    }
};
console.log(playlist);

playlist.getName(5);

////////// 49.50 //////