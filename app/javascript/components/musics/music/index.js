import React, { Fragment } from 'react';
import { Heading, Columns } from 'react-bulma-components';
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';
import styled from 'styled-components';

const MusicSeparator = styled.hr`
  height: 1px;
  margin-top: 0px;
`;

const CustomSubHeading = styled(Heading)`
  margin-bottom: 0px !important;
`;

const Music = ({ song, artist_name } = props) => {
  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 1 }} mobile={{ size: 2 }}>
          <FaPlayCircle size='45px' className='has-text-white' />
        </Columns.Column>
        <Columns.Column desktop={{ size: 4 }} mobile={{ size: 8 }}>
          <Columns className='is-vcentered is-mobile'>
            <Columns.Column desktop={{ size: 8 }} mobile={{ size: 8 }}>
              <Heading size={5} className='has-text-white'>
                {song.title}
              </Heading>
              <CustomSubHeading size={6} className='has-text-white' subtitle>
                {artist_name}
              </CustomSubHeading>
            </Columns.Column>
            <Columns.Column
              desktop={{ size: 4 }}
              mobile={{ size: 4 }}
              className='is-pulled-right has-text-right'
            >
              {/* Favorite */}
            </Columns.Column>
          </Columns>
          <MusicSeparator />
        </Columns.Column>
      </Columns>
    </Fragment>
  );
};

export default Music;
