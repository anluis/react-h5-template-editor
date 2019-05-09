import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IStoreState from '../../../types/IStoreState';
import { AnyAction } from 'redux';
import { setMaterialChoosenCom } from '../../../actions/status'
import { Com } from '../../../types/coms';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux'
import { initImage } from '../../../constants/coms';
import { cloneDeep } from 'lodash'
import maxOfArray from '../../../utils/helper/maxOfArray'
import materialDelete from '../../../apis/materials/materialDelete';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

interface OwnProps {
  classes: any,
  name?: string,
  imgUrl: string
  belong?: string
  comsIds: Array<number>
  _id?: string
  removeMaterialItem: (_id: string) => void
}

interface DispatchProps {
  setMaterialChoosenCom: (com: Com | null) => void
}

type Props = OwnProps & DispatchProps


function ImageCard(props: Props) {
  const generateComAndSetInStore = () => {
    const newId = maxOfArray(props.comsIds) + 1
    const newImage = cloneDeep(initImage)
    newImage.id = newId
    newImage.name = `Image-${newId}`
    newImage.imgUrl = props.imgUrl
    props.setMaterialChoosenCom(newImage)
  }

  const bindStyles = {
    margin: '20px'
  }
  const { classes, name, imgUrl, belong, removeMaterialItem } = props;
  const handleMaterialDelete = async () => {
    if (!props._id) {
      return
    }
    try {
      const deleteResult = await materialDelete({ _id: props._id })
      removeMaterialItem(props._id)
    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }
  return (
    <Card className={classes.card} style={bindStyles}>
      <CardMedia
        className={classes.media}
        image={imgUrl}
        title={name}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        {belong === 'dialog' && <Button size="small" onClick={generateComAndSetInStore}>选择</Button>}
        {belong !== 'dialog' && <Button size="small" color="secondary" onClick={handleMaterialDelete}>删除</Button>}
      </CardActions>
    </Card>
  );
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state: IStoreState) => {
  const comsIds = state.work.coms.map(item => { return item.id })
  return {
    comsIds
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    setMaterialChoosenCom: (com: Com | null) => {
      dispatch(setMaterialChoosenCom(com))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ImageCard))