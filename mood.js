
 

$('#links1').on('click', function() {


	var songs = [{
            
                'name': 'Naach Meri Jaan ',
                'artist': 'Pritam, Kamaal Khan, Nakash Aziz, Dev Negi , Tushar Joshi',
                'album': 'Tubelight',
                'duration': '4:47',
                'fileName': 'song7.mp3',
                 'image': 'song7.jpg'
               

            },
            {
                'name': 'Thodi Der',
                'artist': 'Farhan Saeed , Shreya Ghoshal ',
                'album': 'Half Girlfriend',
                'duration': '4:56',
                'fileName': 'song12.mp3',
                 'image': 'song12.jpg'
             
            },
            {
                'name': 'Nain ',
                'artist': ' Yasser Desai, Palak Muchhal',
                'album': 'Ik Haseena Thi ik dewaana tha',
                'duration': '4:41',
                'fileName': 'song20.mp3',
                 'image': 'song11.jpg'
           
            },
            {
                'name': ' Swag ',
                'artist': ' Pranaay, Brijesh Shandilya',
                'album': 'Munna Michael',
                'duration': '2:38',
                'fileName': 'song18.mp3',
                 'image': 'song18.jpg'
          
            }];
         
     for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }

});

$('#links2').on('click', function() {


	 songs= [{
            
                'name': 'Sawan Aaya Hai',
                'artist': 'Neha Kakkar',
                'album': 'Creature 3D',
                'duration': '4:02',
                'fileName': 'song11.mp3',
                 'image': 'song11.jpg'
               

            },
            {
                'name': 'Baarish',
                'artist': 'Tanishk Bagchi, Ash King, Shashaa Tirupati',
                'album': 'Ok Jaanu',
                'duration': '4:35',
                'fileName': 'song6.mp3',
                 'image': 'song6.jpg'
             
            },
            {
                'name': ' Baarish (Yaariyan)',
                'artist': ' Mohammed Irfan',
                'album': 'Yaariyan',
                'duration': '6:15',
                'fileName': 'song9.mp3',
                 'image': 'song9.jpg'
           
            },
            {
                'name': ' Walking In The Rain',
                'artist': ' Ranjit Barot',
                'album': ' Walking In The Rain',
                'duration': '5:50',
                'fileName': 'song8.mp3',
                 'image': 'song8.jpg'
          
            }];
         
     for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }

});



$('#links3').on('click', function() {


	 songs= [{
            
                'name': 'Lambiyaan Si Judaiyaan',
                'artist': 'Arijit Singh ,Shadab Faridi, Altamash Faridi',
                'album': 'Lambiyaan Si Judaiyaan',
                'duration': '3:58',
                'fileName': 'song10.mp3',
                 'image': 'song10.jpg'
               

            },
            {
                'name': 'Apni Bna Lai ',
                'artist': ' Mehtab Virk',
                'album': 'Apni Bna Lai ',
                'duration': '4:01',
                'fileName': 'song15.mp3',
                 'image': 'song15.jpg'
             
            },
            {
                'name': '  I Like You',
                'artist': ' Guru Randhawa',
                'album': ' I Like You',
                'duration': '4:25',
                'fileName': 'song13.mp3',
                 'image': 'song13.jpg'
           
            },
            {
                'name': '  If I Luv U ',
                'artist': ' Roshan Prince',
                'album': ' If I Luv U ',
                'duration': '5:54',
                'fileName': 'song14.mp3',
                 'image':  'song14.jpg'
          
            }];
         
     for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }
      });


 

$('#links4').on('click', function() {


     songs= [{
            
                'name': ' Aaja_veh_Mahi',
                'artist': ' Altamash Faridi',
                'album': 'Lambiyaan Si Judaiyaan',
                'duration': '4:22',
                'fileName': 'song5.mp3',
                'image': 'song5.jpg'
               

            },
            {
                'name': 'Allah_Hoo. ',
                'artist': ' Honey singh ,Mika Singh',
                'album': 'pardes ',
                'duration': '6:29',
                'fileName': 'song16.mp3',
                 'image': 'song16.jpg'
            },
            {
                'name': ' Jogan',
                'artist': 'Nooran Sisters',
                'album': 'Nooran Sisters',
                'duration': '4:06',
                'fileName': ' song19.mp3',
                 'image': 'song19.jpg'
           
            },
            {
                'name': ' lal meri pat',
                'artist': 'mohammad rafi',
                'album': ' lal meri pat',
                'duration': '8:00',
                'fileName': 'song17.mp3',
                 'image': 'song17.jpg'

          
            }];
         
     for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }

});
