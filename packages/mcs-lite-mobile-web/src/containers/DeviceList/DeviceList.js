import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Transition from 'react-motion-ui-pack';
import { P, PullToRefresh, PreventDrag, Input } from 'mcs-lite-ui';
import IconSearch from 'mcs-lite-icon/lib/IconSearch';
import { actions } from '../../modules/devices';
import DeviceCard from '../../components/DeviceCard';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';
import Header, { HEIGHT } from '../../components/Header/Header';
import HeaderIcon from '../../components/HeaderIcon';

const Container = styled(MaxWidthCenterWrapper)`
  padding: 16px;
`;

const CardWrapper = styled.div`

  > * {
    margin-bottom: 16px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const PlaceholdWrapper = styled(P)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: ${HEIGHT};
  bottom: 0;
`;

class DeviceList extends React.Component {
  state = { isFilterOpen: false, filterValue: '' };
  onFilterChange = e => this.setState({ filterValue: e.target.value });
  onFilterClick = () => this.setState({ isFilterOpen: !this.state.isFilterOpen });
  onRefresh = done => this.props.fetchDevices(done);
  render() {
    const { isFilterOpen, filterValue } = this.state;
    const { devices } = this.props;
    const { onRefresh, onFilterChange, onFilterClick } = this;

    return (
      <div>
        <Header title={!isFilterOpen && '我的裝置列表很長很長很長很長很長很長很長很長很長很長很長很長很長'}>
          {isFilterOpen &&
            <Transition
              component={false}
              enter={{ opacity: 1, marginLeft: 0 }}
              leave={{ opacity: 0, marginLeft: 50 }}
            >
              <Input
                autoFocus
                key="filter"
                placeholder="搜尋"
                value={filterValue}
                onChange={onFilterChange}
              />
            </Transition>
          }
          <HeaderIcon onClick={onFilterClick}><IconSearch /></HeaderIcon>
        </Header>

        <main>
          <PullToRefresh onRefresh={onRefresh}>
            <Container>
              <CardWrapper>
                {
                  devices.map(device => (
                    <PreventDrag key={device.id}>
                      <StyledLink to={`/devices/${device.id}`}>
                        <DeviceCard
                          title={device.name}
                          image={device.image}
                        />
                      </StyledLink>
                    </PreventDrag>
                  ))
                }
              </CardWrapper>
              {R.isEmpty(devices) &&
                <PlaceholdWrapper>目前還沒有任何測試裝置</PlaceholdWrapper>
              }
            </Container>
          </PullToRefresh>
        </main>
      </div>
    );
  }
}

export default connect(
  ({ devices }) => ({ devices }),
  { fetchDevices: actions.fetchDevices },
)(DeviceList);
