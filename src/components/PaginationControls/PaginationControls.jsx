import { Pagination, Box } from '@mui/material';
import './PaginationControls.css';

export default function PaginationControls({ info, page, onPageChange }) {
  if (!info || info.pages <= 1) return null;

  return (
    <Box className="pagination-controls">
      <Pagination
        count={info.pages}
        page={page}
        onChange={(_, value) => onPageChange(value)}
        color="primary"
        shape="rounded"
      />
    </Box>
  );
}
