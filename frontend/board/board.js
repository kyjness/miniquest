// API 기본 URL (백엔드 서버 주소로 변경 가능)
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// 현재 선택된 게시글 ID
let currentPostId = null;
let deletePostId = null;

// DOM 요소 가져오기
const postsList = document.getElementById('postsList');
const postDetailSection = document.getElementById('postDetailSection');
const postDetail = document.getElementById('postDetail');
const postsSection = document.querySelector('.posts-section');
const commentsList = document.getElementById('commentsList');

// 모달 요소
const postModal = document.getElementById('postModal');
const deleteModal = document.getElementById('deleteModal');
const postForm = document.getElementById('postForm');
const modalTitle = document.getElementById('modalTitle');

// 버튼 요소
const writeBtn = document.getElementById('writeBtn');
const homeBtn = document.getElementById('homeBtn');
const backToListBtn = document.getElementById('backToListBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const submitPostBtn = document.getElementById('submitPostBtn');
const submitCommentBtn = document.getElementById('submitCommentBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

// ========== 이벤트 리스너 ==========

// 페이지 로드 시 게시글 목록 가져오기
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});

// 글쓰기 버튼 클릭
writeBtn.addEventListener('click', function() {
    openPostModal('create');
});

// 홈 버튼 클릭
homeBtn.addEventListener('click', function() {
    showPostsList();
});

// 목록으로 돌아가기 버튼
backToListBtn.addEventListener('click', function() {
    showPostsList();
});

// 모달 닫기 버튼
closeModalBtn.addEventListener('click', function() {
    postModal.close();
});

cancelBtn.addEventListener('click', function() {
    postModal.close();
});

// 게시글 작성/수정 폼 제출
postForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    await submitPost();
});

// 댓글 작성 버튼
submitCommentBtn.addEventListener('click', async function() {
    await submitComment();
});

// 삭제 확인 모달 취소
cancelDeleteBtn.addEventListener('click', function() {
    deleteModal.close();
});

// 삭제 확인 모달 확인
confirmDeleteBtn.addEventListener('click', async function() {
    await deletePost();
});

// 모달 외부 클릭 시 닫기
postModal.addEventListener('click', function(e) {
    if (e.target === postModal) {
        postModal.close();
    }
});

deleteModal.addEventListener('click', function(e) {
    if (e.target === deleteModal) {
        deleteModal.close();
    }
});

// ========== Fetch 함수들 ==========

// 게시글 목록 가져오기
async function loadPosts() {
    try {
        postsList.innerHTML = '<div class="loading">게시글을 불러오는 중...</div>';
        
        const response = await fetch(`${API_BASE_URL}/posts`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        
        if (posts.length === 0) {
            postsList.innerHTML = '<div class="empty-state"><p>게시글이 없습니다.</p></div>';
            return;
        }
        
        // 최근 10개만 표시
        const recentPosts = posts.slice(0, 10);
        displayPosts(recentPosts);
        
    } catch (error) {
        postsList.innerHTML = `<div class="error">게시글을 불러오는 중 오류가 발생했습니다: ${error.message}</div>`;
    }
}

// 게시글 목록 표시
function displayPosts(posts) {
    postsList.innerHTML = posts.map(post => `
        <div class="post-item" data-post-id="${post.id}">
            <div class="post-item-header">
                <div class="post-title">${post.title}</div>
                <div class="post-actions">
                    <button class="btn-small btn-edit" onclick="editPost(${post.id})">수정</button>
                    <button class="btn-small btn-delete" onclick="confirmDelete(${post.id})">삭제</button>
                </div>
            </div>
            <div class="post-body-preview">${post.body}</div>
            <div class="post-meta">게시글 ID: ${post.id} | 사용자 ID: ${post.userId}</div>
        </div>
    `).join('');
    
    // 게시글 클릭 이벤트 추가
    document.querySelectorAll('.post-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // 버튼 클릭이 아닐 때만 상세보기
            if (!e.target.classList.contains('btn-edit') && !e.target.classList.contains('btn-delete')) {
                const postId = this.getAttribute('data-post-id');
                viewPostDetail(postId);
            }
        });
    });
}

// 게시글 상세보기
async function viewPostDetail(postId) {
    try {
        currentPostId = postId;
        postDetail.innerHTML = '<div class="loading">게시글을 불러오는 중...</div>';
        commentsList.innerHTML = '<div class="loading">댓글을 불러오는 중...</div>';
        
        // 게시글 상세 정보 가져오기
        const postResponse = await fetch(`${API_BASE_URL}/posts/${postId}`);
        if (!postResponse.ok) {
            throw new Error(`HTTP error! status: ${postResponse.status}`);
        }
        const post = await postResponse.json();
        
        // 댓글 가져오기
        const commentsResponse = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
        if (!commentsResponse.ok) {
            throw new Error(`HTTP error! status: ${commentsResponse.status}`);
        }
        const comments = await commentsResponse.json();
        
        // 게시글 상세 표시
        postDetail.innerHTML = `
            <div class="post-detail-header">
                <h2 class="post-detail-title">${post.title}</h2>
                <div class="post-detail-meta">게시글 ID: ${post.id} | 사용자 ID: ${post.userId}</div>
            </div>
            <div class="post-detail-body">${post.body}</div>
            <div class="post-detail-actions">
                <button class="btn-primary" onclick="editPost(${post.id})">수정</button>
                <button class="btn-danger" onclick="confirmDelete(${post.id})">삭제</button>
            </div>
        `;
        
        // 댓글 표시
        displayComments(comments);
        
        // 상세보기 화면으로 전환
        postsSection.style.display = 'none';
        postDetailSection.style.display = 'block';
        
    } catch (error) {
        postDetail.innerHTML = `<div class="error">게시글을 불러오는 중 오류가 발생했습니다: ${error.message}</div>`;
    }
}

// 댓글 표시
function displayComments(comments) {
    if (comments.length === 0) {
        commentsList.innerHTML = '<div class="empty-state"><p>댓글이 없습니다.</p></div>';
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment-item">
            <div class="comment-header">
                <div>
                    <div class="comment-author">${comment.name}</div>
                    <div class="comment-email">${comment.email}</div>
                </div>
            </div>
            <div class="comment-body">${comment.body}</div>
        </div>
    `).join('');
}

// 게시글 목록 화면으로 전환
function showPostsList() {
    postsSection.style.display = 'block';
    postDetailSection.style.display = 'none';
    currentPostId = null;
    loadPosts();
}

// 게시글 작성 모달 열기
function openPostModal(mode, postId = null) {
    if (mode === 'create') {
        modalTitle.textContent = '게시글 작성';
        postForm.reset();
        document.getElementById('postId').value = '';
        document.getElementById('postUserId').value = '1';
    } else if (mode === 'edit') {
        modalTitle.textContent = '게시글 수정';
        loadPostForEdit(postId);
    }
    postModal.showModal();
}

// 수정할 게시글 정보 가져오기
async function loadPostForEdit(postId) {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/${postId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const post = await response.json();
        
        document.getElementById('postId').value = post.id;
        document.getElementById('postTitle').value = post.title;
        document.getElementById('postBody').value = post.body;
        document.getElementById('postUserId').value = post.userId;
        
    } catch (error) {
        alert(`게시글을 불러오는 중 오류가 발생했습니다: ${error.message}`);
    }
}

// 게시글 작성/수정 제출
async function submitPost() {
    const postId = document.getElementById('postId').value;
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;
    const userId = parseInt(document.getElementById('postUserId').value);
    
    const postData = {
        title: title,
        body: body,
        userId: userId
    };
    
    try {
        submitPostBtn.disabled = true;
        submitPostBtn.textContent = '처리 중...';
        
        let response;
        if (postId) {
            // 수정
            postData.id = parseInt(postId);
            response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
        } else {
            // 작성
            response = await fetch(`${API_BASE_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        postModal.close();
        alert(postId ? '게시글이 수정되었습니다.' : '게시글이 작성되었습니다.');
        
        // 목록 새로고침
        if (currentPostId) {
            viewPostDetail(currentPostId);
        } else {
            loadPosts();
        }
        
    } catch (error) {
        alert(`게시글 저장 중 오류가 발생했습니다: ${error.message}`);
    } finally {
        submitPostBtn.disabled = false;
        submitPostBtn.textContent = '작성';
    }
}

// 게시글 수정 버튼 클릭
function editPost(postId) {
    openPostModal('edit', postId);
}

// 삭제 확인 모달 열기
function confirmDelete(postId) {
    deletePostId = postId;
    deleteModal.showModal();
}

// 게시글 삭제
async function deletePost() {
    if (!deletePostId) return;
    
    try {
        confirmDeleteBtn.disabled = true;
        confirmDeleteBtn.textContent = '삭제 중...';
        
        const response = await fetch(`${API_BASE_URL}/posts/${deletePostId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        deleteModal.close();
        alert('게시글이 삭제되었습니다.');
        
        // 목록 새로고침
        showPostsList();
        
    } catch (error) {
        alert(`게시글 삭제 중 오류가 발생했습니다: ${error.message}`);
    } finally {
        confirmDeleteBtn.disabled = false;
        confirmDeleteBtn.textContent = '삭제';
        deletePostId = null;
    }
}

// 댓글 작성
async function submitComment() {
    if (!currentPostId) {
        alert('게시글을 먼저 선택해주세요.');
        return;
    }
    
    const name = document.getElementById('commentName').value.trim();
    const email = document.getElementById('commentEmail').value.trim();
    const body = document.getElementById('commentBody').value.trim();
    
    if (!name || !email || !body) {
        alert('모든 필드를 입력해주세요.');
        return;
    }
    
    const commentData = {
        postId: parseInt(currentPostId),
        name: name,
        email: email,
        body: body
    };
    
    try {
        submitCommentBtn.disabled = true;
        submitCommentBtn.textContent = '작성 중...';
        
        const response = await fetch(`${API_BASE_URL}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // 댓글 입력 필드 초기화
        document.getElementById('commentName').value = '';
        document.getElementById('commentEmail').value = '';
        document.getElementById('commentBody').value = '';
        
        alert('댓글이 작성되었습니다.');
        
        // 댓글 목록 새로고침
        const commentsResponse = await fetch(`${API_BASE_URL}/posts/${currentPostId}/comments`);
        if (commentsResponse.ok) {
            const comments = await commentsResponse.json();
            displayComments(comments);
        }
        
    } catch (error) {
        alert(`댓글 작성 중 오류가 발생했습니다: ${error.message}`);
    } finally {
        submitCommentBtn.disabled = false;
        submitCommentBtn.textContent = '댓글 작성';
    }
}
