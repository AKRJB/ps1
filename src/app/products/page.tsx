import React from 'react';
import { DataTable } from '@/components/data-table';
import { columns } from './columns';


const productsData = [
    {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Common Whole mount Slides",
        "price": 7.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Common Section slides",
        "price": 8.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Bryophyta Section Slides",
        "price": 10.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Pteridophytes Section Slides",
        "price": 10.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Gymnosperms Section Slides",
        "price": 15.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Mitosis - set of 5 Slides (In Onion root L.S)",
        "price": 50.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Mitosis - set of 5 Slides (Smear)",
        "price": 125.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Meosis- Set of 12 Slides (In section )",
        "price": 120.00
      },
      {
        "category": "Slides",
        "subcategory": "Botany",
        "title": "Meosis- Set of 12 Slides (Smear)",
        "price": 360.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Common Whole mount Slides",
        "price": 8.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Histology Slides Section",
        "price": 12.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Amoeba W. M.(Protozoa)",
        "price": 85.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Amoeba Binary Fission W.M",
        "price": 180.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Paramecium Fission W.M.",
        "price": 60.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Paramecium Conjugation . W. M.",
        "price": 40.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Liver Fluke W.M (Platyhelminthes)",
        "price": 30.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Readia W.M (Platyhelminthes)",
        "price": 15.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Cercaria W.M (Platyhelminthes)",
        "price": 15.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Hydra W.M (Colenterata)",
        "price": 10.00
      },
      {
        "category": "Slides",
        "subcategory": "Zoology",
        "title": "Hydra Budding W.M (Colenterata)",
        "price": 18.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "All Algae Plants in Plastic Jar 6”x2”",
        "price": 85.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "All Fungai Plants in Plastic Jar 6”x2”",
        "price": 85.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "All Bryophyta Plants in Plastic Jar 6”x2”",
        "price": 85.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "All Pteridophyta Plants in Plastic Jar 6”x2”",
        "price": 85.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "All Gymnosperms Plants in Plastic Jar 6”x2”",
        "price": 85.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "All Hydrophytic Plants in Plastic Jar 6”x2”",
        "price": 85.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "Algae plants Collection Set in Plastic Jar 6”x2”",
        "price": 180.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "Fungai Plants Collection Set in Plastic Jar 6”x2”",
        "price": 180.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "Bryophyta plants Collection Set in Plastic Jar 6”x2”",
        "price": 180.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "Pteridophyta plants Collection Set in Plastic Jar 6”x2”",
        "price": 180.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "Gymnosperms plants Collection Set in Plastic Jar 6”x2”",
        "price": 180.00
      },
      {
        "category": "Plastic Jars",
        "subcategory": "Botany",
        "title": "Hydrophytic plants Collection Set in Plastic Jar 6”x2”",
        "price": 180.00
      },
      {
          "category": "Plastic Jars",
          "subcategory": "Botany",
          "title": "Bean Seed Germination",
          "price": 160.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Botany",
          "title": "Maize Seed Germination",
          "price": 160.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Botany",
          "title": "Pea Seed Germination",
          "price": 160.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Botany",
          "title": "Gram Seed Germination",
          "price": 160.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Botany",
          "title": "Castor Seed Germination",
          "price": 160.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Zoology",
          "title": "All Common Specimens in Plastic Jars",
          "price": 55.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Zoology",
          "title": "Grasshopper Life Cycle in 6''x2'' Jar",
          "price": 120.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Zoology",
          "title": "Honey Bee Life Cycle in 6''x2'' Jar",
          "price": 120.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Zoology",
          "title": "Cockroach Life Cycle in 6''x2'' Jar",
          "price": 120.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Zoology",
          "title": "Silk Moth Life Cycle in 6''x2'' Jar",
          "price": 120.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Zoology",
          "title": "House Fly Life Cycle in 6''x2'' Jar",
          "price": 120.00
        },
        {
          "category": "Plastic Jars",
          "subcategory": "Zoology",
          "title": "Moskito Life Cycle in 6''x2'' Jar",
          "price": 120.00
        },
        {
          "category": "Showcase",
          "subcategory": "Botany",
          "title": "Dry Collection plastic showcase (Dispersal of Seeds & Fruits by Wind/Water/Animal)",
          "price": 165.00
        },
        {
          "category": "Showcase",
          "subcategory": "Zoology",
          "title": "Different Type of collection in Plastic Showcase (Echinodermata/Mollusca/Sponje - Useful insect & Harmful Insect)",
          "price": 165.00
        },
        {
          "category": "Models",
          "title": "Animal Models In Plastic Showcase",
          "price": 385.00
        },
        {
          "category": "Models",
          "title": "Fishes Models In Plastic Showcase",
          "price": 385.00
        },
        {
          "category": "Models",
          "title": "Amphibians Models In Plastic Showcase",
          "price": 385.00
        },
        {
          "category": "Models",
          "title": "Reptiles Models In Plastic Showcase",
          "price": 385.00
        },
        {
          "category": "Models",
          "title": "Mammals Models In Plastic Showcase",
          "price": 385.00
        },
        {
          "category": "Models",
          "title": "Birds Models In Plastic Showcase",
          "price": 385.00
        },
        {
          "category": "Class Work Material",
          "subcategory": "Botany",
          "title": "15 ml Plastic bottle",
          "price": 15.00
        },
        {
          "category": "Class Work Material",
          "subcategory": "Botany",
          "title": "100 ml Plastic bottle",
          "price": 50.00
        },
        {
          "category": "Class Work Material",
          "subcategory": "Botany",
          "title": "500 ml Plastic bottle",
          "price": 140.00
        }
]

const App = () => {
  return (
    <div className='pt-20 mt-12'>
      <DataTable columns={columns} data={productsData}/>
    </div>
  );
};

export default App;
