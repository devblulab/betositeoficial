
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
  Fab,
  Zoom,
  Fade,
  CircularProgress,
  LinearProgress,
  Drawer,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Tooltip,
  Snackbar,
  Box,
  Divider,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  Timeline,
  Favorite,
  FavoriteBorder,
  Share,
  Comment,
  BookmarkBorder,
  Bookmark,
  MoreVert,
  PhotoCamera,
  Send,
  EmojiObjects,
  TrendingUp,
  Visibility,
  Chat,
  Close,
  Add,
  Search,
  FilterList,
  Notifications,
  Extension,
 

  VideoCall,
  AttachFile,
  Edit,
  Delete,
  Reply,
  ThumbUp,
  ThumbDown,
  Star,
  StarBorder,
  People,
  Public,
  Lock,
  Settings,
  Refresh,
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  FullscreenExit,
  Fullscreen,
  Speed,
  Schedule,
  Today,
  AccessTime,
} from '@material-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.type === 'dark' 
      ? 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%)'
      : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh',
    padding: 0,
    overflow: 'hidden',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(2),
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderRadius: '0 0 20px 20px',
    boxShadow: theme.shadows[8],
  },
  mainContainer: {
    display: 'flex',
    height: 'calc(100vh - 80px)',
    overflow: 'hidden',
  },
  feedContainer: {
    flex: 1,
    height: '100%',
    overflowY: 'auto',
    padding: theme.spacing(0, 2),
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(0,0,0,0.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 10,
    },
  },
  postCard: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[12],
      transform: 'translateY(-2px)',
    },
  },
  postHeader: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postMedia: {
    height: 400,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    '&:hover': {
      '& $mediaOverlay': {
        opacity: 1,
      },
    },
  },
  mediaOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  postActions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postContent: {
    padding: theme.spacing(0, 2, 2),
  },
  chatSidebar: {
    width: 350,
    background: theme.palette.background.paper,
    borderLeft: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1200,
      boxShadow: theme.shadows[16],
    },
  },
  chatHeader: {
    padding: theme.spacing(2),
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatMessages: {
    flex: 1,
    overflowY: 'auto',
    padding: theme.spacing(1),
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(0,0,0,0.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(0,0,0,0.3)',
      borderRadius: 4,
    },
  },
  chatInput: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    gap: theme.spacing(1),
  },
  aiButton: {
    background: 'linear-gradient(135deg, #FF1493 0%, #8A2BE2 100%)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(135deg, #FF1493 0%, #8A2BE2 100%)',
      transform: 'scale(1.05)',
    },
  },
  smartFilters: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    margin: theme.spacing(0, 2, 2),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  aiEnhanceButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    color: 'white',
    minWidth: 'auto',
    padding: theme.spacing(1),
    '&:hover': {
      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
      transform: 'scale(1.1)',
    },
  },
  expandedPost: {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[20],
    zIndex: 10,
  },
  aiInsight: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    margin: theme.spacing(1, 0),
  },
  floatingActions: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  messageUser: {
    alignSelf: 'flex-end',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(1, 2),
    borderRadius: '20px 20px 5px 20px',
    margin: theme.spacing(0.5),
    maxWidth: '80%',
  },
  messageAI: {
    alignSelf: 'flex-start',
    background: theme.palette.grey[200],
    color: theme.palette.text.primary,
    padding: theme.spacing(1, 2),
    borderRadius: '20px 20px 20px 5px',
    margin: theme.spacing(0.5),
    maxWidth: '80%',
  },
  storyContainer: {
    display: 'flex',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    overflowX: 'auto',
    background: theme.palette.background.paper,
    margin: theme.spacing(0, 2, 2),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    '&::-webkit-scrollbar': {
      height: 4,
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(0,0,0,0.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(0,0,0,0.3)',
      borderRadius: 4,
    },
  },
  storyItem: {
    textAlign: 'center',
    minWidth: 80,
    cursor: 'pointer',
    '&:hover': {
      '& $storyAvatar': {
        transform: 'scale(1.1)',
      },
    },
  },
  storyAvatar: {
    width: 60,
    height: 60,
    border: '3px solid transparent',
    background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
    transition: 'transform 0.3s ease',
    marginBottom: theme.spacing(1),
  },
}));

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  image?: string;
  video?: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
  bookmarked: boolean;
  aiEnhanced?: boolean;
  insights?: string[];
  hashtags?: string[];
  location?: string;
}

interface Story {
  id: string;
  user: string;
  avatar: string;
  viewed: boolean;
}

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Feed: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [chatOpen, setChatOpen] = useState(!isMobile);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [filterDialog, setFilterDialog] = useState(false);
  const [aiEnhancing, setAiEnhancing] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notificationCount, setNotificationCount] = useState(3);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as any });
  
  const feedRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  const lastPostElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMorePosts();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    initializeFeed();
    initializeChat();
    initializeStories();
  }, []);

  const initializeFeed = () => {
    const initialPosts: Post[] = [
      {
        id: '1',
        author: { name: 'Lívia IA', avatar: '/gabi.png', verified: true },
        content: 'Análise de tendências em tempo real detectou aumento de 47% na procura por serviços digitais. Oportunidade de mercado identificada! 🚀',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop',
        timestamp: new Date(),
        likes: 234,
        comments: 45,
        shares: 23,
        liked: false,
        bookmarked: false,
        aiEnhanced: true,
        insights: ['Alta engagement prevista', 'Melhor horário: 14:30', 'Público-alvo: Empresários'],
        hashtags: ['#IA', '#Tendências', '#Oportunidade'],
        location: 'Brasil',
      },
      {
        id: '2',
        author: { name: 'Gabriel Tech', avatar: '/gui.png' },
        content: 'Implementando nova arquitetura neural para otimização de processos. Os resultados são impressionantes! 🧠⚡',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=400&fit=crop',
        timestamp: new Date(Date.now() - 3600000),
        likes: 189,
        comments: 32,
        shares: 18,
        liked: true,
        bookmarked: true,
        hashtags: ['#Tech', '#IA', '#Inovação'],
      },
      {
        id: '3',
        author: { name: 'Sistema Inteligente', avatar: '/logo.webp', verified: true },
        content: 'Relatório automático: Performance do sistema aumentou 23% nas últimas 24h. Machine Learning em ação! 📊',
        timestamp: new Date(Date.now() - 7200000),
        likes: 156,
        comments: 28,
        shares: 12,
        liked: false,
        bookmarked: false,
        aiEnhanced: true,
        insights: ['Engagement alto', 'Compartilhamento recomendado'],
      },
    ];
    setPosts(initialPosts);
  };

  const initializeStories = () => {
    const initialStories: Story[] = [
      { id: '1', user: 'Lívia IA', avatar: '/gabi.png', viewed: false },
      { id: '2', user: 'Gabriel', avatar: '/gui.png', viewed: true },
      { id: '3', user: 'Sistema', avatar: '/logo.webp', viewed: false },
      { id: '4', user: 'Beto Despa', avatar: '/betologo.jpeg', viewed: false },
    ];
    setStories(initialStories);
  };

  const initializeChat = () => {
    const initialMessages: ChatMessage[] = [
      {
        id: '1',
        content: 'Olá! Sou sua assistente IA para o feed. Como posso ajudar?',
        sender: 'ai',
        timestamp: new Date(),
      },
    ];
    setChatMessages(initialMessages);
  };

  const loadMorePosts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    
    // Simula carregamento de novos posts
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newPosts: Post[] = [
      {
        id: `post-${Date.now()}`,
        author: { name: 'IA Colaborativa', avatar: '/logo.webp' },
        content: `Post gerado automaticamente ${new Date().toLocaleTimeString()}. Conteúdo inteligente baseado em suas preferências! 🤖`,
        image: `https://picsum.photos/500/400?random=${Date.now()}`,
        timestamp: new Date(),
        likes: Math.floor(Math.random() * 200),
        comments: Math.floor(Math.random() * 50),
        shares: Math.floor(Math.random() * 30),
        liked: false,
        bookmarked: false,
        aiEnhanced: Math.random() > 0.5,
      },
    ];
    
    setPosts(prev => [...prev, ...newPosts]);
    setLoading(false);
    
    // Simula fim dos posts após 10 posts
    if (posts.length > 8) {
      setHasMore(false);
    }
  };

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleBookmark = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, bookmarked: !post.bookmarked }
        : post
    ));
    setSnackbar({ 
      open: true, 
      message: 'Post salvo nos favoritos!', 
      severity: 'success' 
    });
  };

  const handleEnhanceWithAI = async (postId: string) => {
    setAiEnhancing(postId);
    
    // Simula processamento IA
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            aiEnhanced: true,
            insights: [
              'Engagement otimizado pela IA',
              'Alcance projetado: +150%',
              'Melhor horário para compartilhar',
            ],
            content: post.content + '\n\n✨ Aprimorado pela IA: Este conteúdo foi otimizado para maior engajamento!'
          }
        : post
    ));
    
    setAiEnhancing(null);
    setSnackbar({ 
      open: true, 
      message: 'Post aprimorado com IA!', 
      severity: 'success' 
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: chatInput,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Simula resposta da IA
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Entendi! Posso ajudar você a encontrar conteúdo relevante ou sugerir melhorias para seus posts. O que você gostaria de fazer?',
        sender: 'ai',
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleExpandPost = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const filteredPosts = posts.filter(post => {
    switch (selectedFilter) {
      case 'ai': return post.aiEnhanced;
      case 'liked': return post.liked;
      case 'bookmarked': return post.bookmarked;
      default: return true;
    }
  });

  return (
    <div className={classes.root}>
      {/* Header */}
      <motion.div 
        className={classes.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Timeline style={{ marginRight: 16, fontSize: 32 }} />
            <div>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Feed Inteligente
              </Typography>
              <Typography variant="body2" style={{ opacity: 0.9 }}>
                Powered by AI • Real-time Updates
              </Typography>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <IconButton 
              color="inherit"
              onClick={() => setFilterDialog(true)}
            >
              <FilterList />
            </IconButton>
            
            <Badge badgeContent={notificationCount} color="secondary">
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
            </Badge>
            
            {isMobile && (
              <IconButton 
                color="inherit"
                onClick={() => setChatOpen(!chatOpen)}
              >
                <Chat />
              </IconButton>
            )}
          </div>
        </div>
      </motion.div>

      <div className={classes.mainContainer}>
        {/* Feed Principal */}
        <div className={classes.feedContainer} ref={feedRef}>
          
          {/* Stories */}
          <motion.div 
            className={classes.storyContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {stories.map((story) => (
              <div key={story.id} className={classes.storyItem}>
                <Avatar 
                  src={story.avatar} 
                  className={classes.storyAvatar}
                  style={{ 
                    border: story.viewed ? '3px solid #ccc' : '3px solid #667eea' 
                  }}
                />
                <Typography variant="caption" noWrap>
                  {story.user}
                </Typography>
              </div>
            ))}
          </motion.div>

          {/* Filtros Inteligentes */}
          <motion.div 
            className={classes.smartFilters}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Typography variant="subtitle2" gutterBottom>
              <Extension style={{ marginRight: 8, verticalAlign: 'middle' }} />
              Filtros IA
            </Typography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { key: 'all', label: 'Todos', icon: <Public /> },
                { key: 'ai', label: 'IA Enhanced', icon: <Extension /> },
                { key: 'liked', label: 'Curtidos', icon: <Favorite /> },
                { key: 'bookmarked', label: 'Salvos', icon: <Bookmark /> },
              ].map((filter) => (
                <Chip
                  key={filter.key}
                  icon={filter.icon}
                  label={filter.label}
                  onClick={() => setSelectedFilter(filter.key)}
                  color={selectedFilter === filter.key ? 'primary' : 'default'}
                  variant={selectedFilter === filter.key ? 'default' : 'outlined'}
                />
              ))}
            </div>
          </motion.div>

          {/* Posts */}
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                ref={index === filteredPosts.length - 1 ? lastPostElementRef : null}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${classes.postCard} ${expandedPost === post.id ? classes.expandedPost : ''}`}
              >
                <Card>
                  {/* Header do Post */}
                  <div className={classes.postHeader}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={post.author.avatar} style={{ marginRight: 12 }} />
                      <div>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                          {post.author.name}
                          {post.author.verified && (
                            <Star style={{ marginLeft: 4, fontSize: 16, color: '#FFD700' }} />
                          )}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {post.timestamp.toLocaleString()}
                          {post.location && ` • ${post.location}`}
                        </Typography>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {post.aiEnhanced && (
                        <Chip
                          icon={<Extension />}
                          label="IA Enhanced"
                          size="small"
                          style={{ 
                            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                            color: 'white',
                            marginRight: 8 
                          }}
                        />
                      )}
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    </div>
                  </div>

                  {/* Mídia do Post */}
                  {post.image && (
                    <div 
                      className={classes.postMedia}
                      style={{ backgroundImage: `url(${post.image})` }}
                      onClick={() => handleExpandPost(post.id)}
                    >
                      <div className={classes.mediaOverlay}>
                        <IconButton style={{ color: 'white' }}>
                          {expandedPost === post.id ? <FullscreenExit /> : <Fullscreen />}
                        </IconButton>
                      </div>
                      
                      {!post.aiEnhanced && (
                        <Button
                          className={classes.aiEnhanceButton}
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEnhanceWithAI(post.id);
                          }}
                          disabled={aiEnhancing === post.id}
                        >
                          {aiEnhancing === post.id ? (
                            <CircularProgress size={16} color="inherit" />
                          ) : (
                            <Extension />
                          )}
                        </Button>
                      )}
                    </div>
                  )}

                  {/* Ações do Post */}
                  <div className={classes.postActions}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <IconButton 
                        onClick={() => handleLike(post.id)}
                        style={{ color: post.liked ? '#FF1744' : 'inherit' }}
                      >
                        {post.liked ? <Favorite /> : <FavoriteBorder />}
                      </IconButton>
                      <IconButton>
                        <Comment />
                      </IconButton>
                      <IconButton>
                        <Share />
                      </IconButton>
                    </div>
                    
                    <IconButton 
                      onClick={() => handleBookmark(post.id)}
                      style={{ color: post.bookmarked ? '#FFD700' : 'inherit' }}
                    >
                      {post.bookmarked ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                  </div>

                  {/* Conteúdo do Post */}
                  <div className={classes.postContent}>
                    <Typography variant="body2" style={{ marginBottom: 8 }}>
                      <strong>{post.likes} curtidas • {post.comments} comentários</strong>
                    </Typography>
                    
                    <Typography variant="body1" style={{ marginBottom: 8 }}>
                      {post.content}
                    </Typography>
                    
                    {post.hashtags && (
                      <div style={{ marginBottom: 8 }}>
                        {post.hashtags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            variant="outlined"
                            style={{ margin: '2px 4px 2px 0' }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Insights da IA */}
                    {post.insights && expandedPost === post.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={classes.aiInsight}
                      >
                        <Typography variant="subtitle2" gutterBottom>
                          <Extension style={{ marginRight: 8, verticalAlign: 'middle' }} />
                          Insights da IA
                        </Typography>
                        {post.insights.map((insight, idx) => (
                          <Typography key={idx} variant="caption" display="block">
                            • {insight}
                          </Typography>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading Indicator */}
          {loading && (
            <div className={classes.loadingContainer}>
              <CircularProgress size={40} />
              <Typography variant="body2" style={{ marginLeft: 16 }}>
                Carregando novos posts...
              </Typography>
            </div>
          )}

          {/* Fim dos Posts */}
          {!hasMore && (
            <Paper style={{ padding: 20, textAlign: 'center', margin: 16 }}>
              <Typography variant="body2" color="textSecondary">
                🎉 Você viu todos os posts! Que tal criar algo novo?
              </Typography>
            </Paper>
          )}
        </div>

        {/* Chat Lateral */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              className={classes.chatSidebar}
              initial={{ x: isMobile ? '100%' : 350 }}
              animate={{ x: 0 }}
              exit={{ x: isMobile ? '100%' : 350 }}
              transition={{ duration: 0.3 }}
            >
              <div className={classes.chatHeader}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Extension style={{ marginRight: 8 }} />
                  <Typography variant="h6">IA Assistant</Typography>
                </div>
                {isMobile && (
                  <IconButton 
                    color="inherit" 
                    onClick={() => setChatOpen(false)}
                  >
                    <Close />
                  </IconButton>
                )}
              </div>

              <div className={classes.chatMessages}>
                {chatMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={message.sender === 'user' ? classes.messageUser : classes.messageAI}
                  >
                    <Typography variant="body2">
                      {message.content}
                    </Typography>
                  </motion.div>
                ))}
              </div>

              <div className={classes.chatInput}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Pergunte algo à IA..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <IconButton 
                  color="primary" 
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim()}
                >
                  <Send />
                </IconButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ações Flutuantes */}
      <div className={classes.floatingActions}>
        <Zoom in>
          <Fab color="primary" size="small">
            <Add />
          </Fab>
        </Zoom>
        <Zoom in style={{ transitionDelay: '100ms' }}>
          <Fab className={classes.aiButton} size="small">
            <Extension />
          </Fab>
        </Zoom>
      </div>

      {/* Dialog de Filtros */}
      <Dialog open={filterDialog} onClose={() => setFilterDialog(false)}>
        <DialogTitle>
          <FilterList style={{ marginRight: 8, verticalAlign: 'middle' }} />
          Filtros Inteligentes
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            A IA aprende suas preferências para personalizar o feed
          </Typography>
          {/* Implementar filtros avançados aqui */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFilterDialog(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Feed;
