import React, { useState } from "react";

type SkillFilterProps = {
    selectedFilter: string | null;
    onFilterChange: (filter: string | null) => void;
    filterData: { level: string; description: string }[];
};

const SkillFilter: React.FC<SkillFilterProps> = ({ selectedFilter, onFilterChange, filterData }) => {

    const [showDesc, setShowDesc] = useState<String>("")

    const handleFilterClick = (option: {level: string; description: string }) => {
        onFilterChange(selectedFilter === option.level ? null : option.level);
        setShowDesc(selectedFilter === option.level ? "" : option.level);
    }


    return (
        <div className="skill-filter-grid" >
            {filterData.map((option) => (
                <div 
                    key={option.level}
                    className={`skill-block filter ${selectedFilter === option.level ? "active" : ""}`}
                    onClick={() => handleFilterClick(option)}
                >
                    <h2> {option.level} </h2>
                    <div className={`skill-clarification ${showDesc === option.level ? "visible" : "hidden"}`}> 
                        {option.description} 
                    </div> 

                </div>
            ))}
        </div>
    );
};

export default SkillFilter;
