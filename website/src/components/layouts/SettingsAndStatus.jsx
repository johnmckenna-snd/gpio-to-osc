import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import axios from 'axios';

import useApi from '../hooks/useApi';

import { colors } from '../../styles/colors';

import { H1, P } from '../ui/Text';
import { Field } from '../ui/Fields';
import { Button } from '../ui/Buttons';
import SmallSpinner from '../ui/Spinner';

const API_URL = process.env.REACT_APP_API_URL || `${window.location.href}api/`;
const loadingToastId = 'loadingToastId';

const Wrapper = styled.div`
  grid-area: main;  
  display: grid;
  justify-items: center;
  padding: 3rem;
  grid-auto-rows: min-content;
`;

function SettingsAndStatus () {
  const [oscConfig, setOscConfig] = useState({
    openedMessagePath: '',
    closedMessagePath: '',
    targetHost: '',
    targetPort: '',
  });

  const [config, loading, reloadConfig] = useApi({
    url: `${API_URL}oscConfig`,
    method: 'get',
  });

  useEffect(() => {
    if (config) {
      setOscConfig(config);
    }
  }, [config]);

  const configLabels = {
    openedMessagePath: 'Opened Message Path',
    closedMessagePath: 'Closed Message Path',
    targetHost: 'Target Host',
    targetPort: 'Target Port',
  };

  function handleChange (e) {
    console.log(e.target);
    const newOscConfig = {
      ...oscConfig,
      [e.target.name]: e.target.value,
    };
    setOscConfig(newOscConfig);
  }

  async function saveSettings (e) {
    toast.loading('Saving settings.', { toastId: loadingToastId });
    try {
      e.preventDefault();

      const saveURL = `${API_URL}setOscConfig`;
      const saveResult = await axios.post(saveURL, oscConfig);
      const saveData = saveResult.data;

      console.info('saveData', saveData);
      toast.update(loadingToastId, {
        render: 'Settings saved.',
        isLoading: false,
        type: 'success',
        autoClose: 5000,
      });
      reloadConfig();
    } catch (err) {
      console.error(err);
      toast.update(loadingToastId, {
        render: 'Settings not saved. Poop. Try again.',
        isLoading: false,
        type: 'error',
        autoClose: 5000,
        closeButton: true,
      });
    }
  }

  return (
    <Wrapper>
      <H1>GPIO to OSC</H1>
      <P margin="1em 0 0 0">Message path example</P>
      <code
        style={{ color: colors.primary.text, margin: '1em 0 1em 0' }}
      >
        /workspace/[workspace-id]/go/[cue-number]
      </code>
      <P margin="1em 0 0 0">Workspace ID can be found at in Qlab at</P>
      <code style={{ color: colors.primary.text, margin: '1em 0 1em 0' }}>Window &gt; Workspace Status &gt; Info</code>
      {loading
        ? <SmallSpinner />
        : (
          <>
            {Object.entries(oscConfig).map((setting) => (
              <Field
                label={configLabels[setting[0]]}
                color={colors.alert.good60}
                value={setting[1]}
                onFieldChange={handleChange}
                name={setting[0]}
              />
            ))}
            <Button
              color={colors.alert.caution}
              text="Save"
              onClick={saveSettings}
            />
          </>
        )}

    </Wrapper>
  );
}

export default SettingsAndStatus;
