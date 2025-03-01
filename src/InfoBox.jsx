import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
        const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
        const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8Mg%3D%3D";
        const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDI%3D";
        const RAIN_URL = "https://images.unsplash.com/photo-1680278277969-59c02afae33b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHwy";

    return (
        <div className="InfoBox">
            <div className='cardContainer'><Card sx={{ maxWidth: 345, backgroundColor: 'blanchedalmond'}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {
                        info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL 
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity >80
                            ? < ThunderstormIcon />
                            : info.temp > 15
                            ? <WbSunnyIcon />
                            : <AcUnitIcon />
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity} </p>
                        <p>Min Temp = {info.tempMin}&deg;C </p>
                        <p>Max Temp = {info.tempMax}&deg;C </p>
                        <p>The weather can be described as <i>{info.weather} </i> and feels like {info.feelslike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card></div>
        </div>
    );
}