import { useState, useEffect, useRef } from "react";
import "./music.css";

function Music() {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [likedSongs, setLikedSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef(null);

  function fetchSongs(search = "all") {
    setIsLoading(true);
    fetch(`https://itunes.apple.com/search?term=${search}&entity=song&limit=50`)
      .then(res => res.json())
      .then(data => {
        const formattedSongs = data.results
          .filter(song =>
            song.artistName.toLowerCase().includes(search.toLowerCase()) ||
            song.trackName.toLowerCase().includes(search.toLowerCase())
          )
          .map((song, index) => ({
            id: song.trackId || index,
            title: song.trackName || "Naməlum Mahnı",
            artist: song.artistName || "Naməlum Artist",
            album: song.collectionName || "Naməlum Albom",
            audioUrl: song.previewUrl || "",
            imageUrl: song.artworkUrl100 || "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
            duration: Math.floor(song.trackTimeMillis / 1000) || 180,
            genre: song.primaryGenreName || "Pop",
          }));
        setSongs(formattedSongs);
        if (formattedSongs.length > 0) setCurrentIndex(0);
      })
  }


  useEffect(function () {
    const savedLikes = localStorage.getItem("music-likedSongs");
    if (savedLikes) setLikedSongs(JSON.parse(savedLikes));

    audioRef.current = new Audio();

    fetchSongs();

    return function () {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  function selectSong(index) {
    if (!audioRef.current || index === currentIndex) return;
    setCurrentIndex(index);
    setCurrentTime(0);

    const song = songs[index];
    if (song.audioUrl) {
      audioRef.current.src = song.audioUrl;
      audioRef.current.currentTime = 0;
      startPlaying();
    }
  }

  function togglePlay() {
    if (!audioRef.current || songs.length === 0) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      startPlaying();
    }
  }

  function startPlaying() {
    if (!audioRef.current) return;
    if (!audioRef.current.src && songs[currentIndex]?.audioUrl) {
      audioRef.current.src = songs[currentIndex].audioUrl;
    }
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }

  function nextSong() {
    const next = (currentIndex + 1) % songs.length;
    selectSong(next);
  }
  function prevSong() {
    const prev = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    selectSong(prev);
  }

  function toggleLike(id) {
    let newLikes = likedSongs.includes(id) ? likedSongs.filter(i => i !== id) : [...likedSongs, id];
    setLikedSongs(newLikes);
    localStorage.setItem("music-likedSongs", JSON.stringify(newLikes));
  }
  function handleSearch(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    fetchSongs(searchTerm);
  }

  useEffect(function () {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    function onTimeUpdate() {
      setCurrentTime(audio.currentTime);
      if (audio.duration > 0) setProgress((audio.currentTime / audio.duration) * 100);
    }

    function onEnded() {
      nextSong();
    }

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return function () {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [songs, currentIndex]);



  function formatTime(sec) {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  const currentSong = songs[currentIndex] || {};

  return (
    <div className="music-container">
      <h2 className="music-container-h2"><i class="bi bi-boombox"></i> Musiqi Player</h2>
      <div className="music-fro-fav">
         <div className="music-fav">
          <button onClick={() => {
            const liked = songs.filter(s => likedSongs.includes(s.id));
            if (liked.length > 0) setSongs(liked);
          }}>Bəyəndiklərim ({likedSongs.length})</button>
        </div>
        <form onSubmit={handleSearch} className="music-from">
          <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Sevimli musiqini axtar..." />
          <button type="submit">Axtar</button>
        </form>
       
      </div>

      {songs.length > 0 && (
        <div className="music-box">
          <div className="music-box-div">
            <img src={currentSong.imageUrl} alt="img" className="music-box-img" />
            <h3 className="music-box-h2">{currentSong.artist}</h3>
            <div className="music-box-divh">
              <p >{currentSong.genre}</p>
              <p className="music-box-divh-p">{currentSong.releaseDate}</p>
            </div>

            <div className="music-time-div">
              <div className="musictime-1" style={{ background: "#ddd", width: "83%", height: "10px", borderRadius: "20px" }} >
                <div className="musictime-2"  style={{ background: "rgba(255, 60, 0, 0.4)", width: `${progress}%`, height: "100%", borderRadius: "20px" }}></div>
              </div>
              <div>{formatTime(currentTime)} / {formatTime(currentSong.duration)}</div>
            </div>
            <div className="music-all-panel">
              <button className="mucis-panel" onClick={prevSong}>⏮</button>
              <button className="mucis-panel" onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
              <button className="mucis-panel" onClick={nextSong}>⏭</button>
            </div>
          </div>
        </div>
      )}
      <div className="music-new-box-two">
        <h4>Mahnı Siyahısı</h4>
        <div className="music-co-new-box">
          {songs.map((song, i) => (
            <div key={song.id} onClick={() => selectSong(i)} className="music-co-new">
              <div className="music-co-new-2">
                <img src={song.imageUrl} alt={song.title} width="50" />
                <span>{song.title} - {song.artist}</span>
                <button onClick={e => { e.stopPropagation(); toggleLike(song.id); }}>{likedSongs.includes(song.id) ? "❤️" : "❤"}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Music;
