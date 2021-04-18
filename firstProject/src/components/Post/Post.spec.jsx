import { fireEvent, render, screen } from "@testing-library/react";

import { PostCard } from '.';

const props = {
    title: "title 1",
    body: "body 1",
    id: 1,
    cover: "https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
}

describe('<PostCard/>', () => {
    it('Should render PostCard correctly', () => {
        render(<PostCard {...props}/>)
    });
});