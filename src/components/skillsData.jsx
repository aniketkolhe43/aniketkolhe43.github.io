import "./Skill.css"

export function SingleSkills(props){
    const {data,type}=props;
  
   
    return (
        <div>
            <h2 className="type">{type}</h2>
            <div className="skills_Data">
                {
                    data?.map((el)=>{
                        return (
                            <div className="single" key={el.img}>
                                <img src={el.img} alt="Profile"/>
                                <h4>{el.name}</h4>
                            </div>
                            

                        )
                    })
                }
            </div>

        </div>
    )
}